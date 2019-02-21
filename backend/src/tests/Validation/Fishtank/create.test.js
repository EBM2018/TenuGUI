const request = require('supertest');
const sinon = require('sinon');
const authFaker = require('../../Fakers/authentication.js');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsZXZlUmFuZG9tIn0.RhXPI2fUIfjgFQR4JIxeM9ElQsRVagT_XgonQbd5uvk',
}];

describe('Fishtank creation validation', () => {
  let app;
  let auth;

  beforeEach(() => {
    auth = require('../../../middlewares/authentication/');
    sinon.stub(auth, 'validateAuthentication')
      .callsFake(authFaker.validate(validUsers));
    app = require('../../../');
  });

  afterEach(() => {
    auth.validateAuthentication.restore();
  });

  test('It should accept a valid request', () => request(app)
    .post('/api/fishtanks')
    .send({
      shoalId: 5,
      token: validUsers[0].token,
    })
    .set('Content-Type', 'application/json')
    .expect(201));
});
