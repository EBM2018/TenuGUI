const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const { sequelize } = require('../../../database/models');

const validUsers = [{
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user from Teamy
}];
const invalidUsers = [{
  id: 2,
}];

describe('Login validation', () => {
  let app;
  let requestLoader;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    sinon.stub(requestLoader, 'addUserToken')
      .callsFake(faker.addUserToken(validUsers));
    app = require('../../../');
  });

  afterEach(() => {
    requestLoader.addUserToken.restore();
  });

  afterAll(async (done) => {
    await sequelize.close();
    done();
  });

  test('It should accept a valid request', () => request(app)
    .post('/api/login')
    .send({
      id: validUsers[0].id,
    })
    .set('Content-Type', 'application/json')
    .expect(200)
    .expect((res) => {
      expect(res.body).toEqual({
        token: validUsers[0].token,
      });
    }));

  test('It should reject a request without an id', () => request(app)
    .post('/api/login')
    .send({})
    .set('Content-Type', 'application/json')
    .expect(422));

  test('It should reject a request with a negative id', () => request(app)
    .post('/api/login')
    .send({
      id: -2,
    })
    .set('Content-Type', 'application/json')
    .expect(422));

  test('It should reject a request with an invalid id according to teamy', () => request(app)
    .post('/api/login')
    .send({
      id: invalidUsers[0].id,
    })
    .set('Content-Type', 'application/json')
    .expect(401));
});
