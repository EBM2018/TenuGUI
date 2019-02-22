const request = require('supertest');
const sinon = require('sinon');
const authFaker = require('../../Fakers/authentication.js');
const models = require('../../../database/models');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ',
}];
const invalidUsers = [{
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im1hcmlzYWJlc3RnaXJsIn0.nlo6R0RtfL9J7UClyJjianLucJK8705WI8zATLsTKXg',
}];
const validShoals = [5];
const invalidShoals = [7];

describe('Fishtank creation validation', () => {
  let app;
  let auth;
  let mockTeamy;

  beforeEach(() => {
    auth = require('../../../middlewares/authentication/');
    mockTeamy = require('../../../__mock_teamy__');
    sinon.stub(auth, 'validateAuthentication')
      .callsFake(authFaker.validateAuthentication(validUsers));
    sinon.stub(mockTeamy, 'isValidShoal')
      .callsFake(authFaker.isValidShoal(validShoals));
    app = require('../../../');
  });

  afterEach(() => {
    auth.validateAuthentication.restore();
    mockTeamy.isValidShoal.restore();
    models.sequelize.close();
  });

  test('It should accept a valid request', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
      token: validUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(201));

  test('It should reject an empty request', () => request(app)
    .post('/api/fishtanks')
    .send({})
    .set('Content-Type', 'application/json')
    .expect(403));

  /* Token validation */
  test('It should reject a request without a token', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
    })
    .set('Content-Type', 'application/json')
    .expect(403));

  test('It should reject a request with a non-JWT token', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
      token: 'test',
    })
    .set('Content-Type', 'application/json')
    .expect(403));

  test('It should reject a request with an invalid token', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: validShoals[0],
      token: invalidUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(403));

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
