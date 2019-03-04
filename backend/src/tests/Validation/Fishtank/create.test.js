const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const { sequelize } = require('../../../database/models');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user from Teamy
}];
const invalidUsers = [{
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im1hcmlzYWJlc3RnaXJsIn0.nlo6R0RtfL9J7UClyJjianLucJK8705WI8zATLsTKXg', // An invalid user according to Teamy
}];
const validShoals = [5]; // A valid shoal according to Teamy
const invalidShoals = [7]; // An invalid shoal according to Teamy

describe('Fishtank creation validation', () => {
  let app;
  let requestLoader;
  let mockTeamy;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    mockTeamy = require('../../../__mock_teamy__');
    sinon.stub(requestLoader, 'addUser')
      .callsFake(faker.addUser(validUsers));
    sinon.stub(mockTeamy, 'isValidShoal')
      .callsFake(faker.isValidShoal(validShoals));
    app = require('../../../');
  });

  afterEach(() => {
    requestLoader.addUser.restore();
    mockTeamy.isValidShoal.restore();
  });

  afterAll(() => {
    sequelize.close();
  });

  test('It should accept a valid request', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
      token: validUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(201)); // TODO : Add response body test

  test('It should reject an empty request', () => request(app)
    .post('/api/fishtanks')
    .send({})
    .set('Content-Type', 'application/json')
    .expect(401));

  /* Token validation */
  test('It should reject a request without a token', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
    })
    .set('Content-Type', 'application/json')
    .expect(401));

  test('It should reject a request with a non-JWT token', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
      token: 'test',
    })
    .set('Content-Type', 'application/json')
    .expect(401));

  test('It should reject a request with an invalid token', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
      token: invalidUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(401));

  /* Shoal validation */
  test('It should reject a request without a shoal id', () => request(app)
    .post('/api/fishtanks')
    .send({
      token: validUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(422));

  test('It should reject a request with an invalid shoal id', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: invalidShoals[0],
      token: validUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(422));
});
