const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const { sequelize, Fishtank, FishtankStatus } = require('../../../database/models');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user from Teamy that owns this suite's fishtanks
}, {
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im11cmFzYWlzZ3JlYXR0aG8ifQ.p4PpEK6QQukfVrSQdsJsY1QIrQzY7OEFtmdN_JPrRgY', // A valid user from Teamy who doesn't own this suite's fishtanks
}];
const invalidUsers = [{
  id: 2,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im1hcmlzYWJlc3RnaXJsIn0.nlo6R0RtfL9J7UClyJjianLucJK8705WI8zATLsTKXg', // An invalid user according to Teamy
}];

describe('Fishtank creation validation', () => {
  let app;
  let requestLoader;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    sinon.stub(requestLoader, 'addUser')
      .callsFake(faker.addUser(validUsers));
    app = require('../../../');
  });

  afterEach(() => {
    requestLoader.addUser.restore();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('It should accept a valid finish request', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        type: Fishtank.editionTypes.FINISH,
        token: validUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(200);
  });

  test('It should reject an empty request', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({})
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  /* Token validation */
  test('It should reject a request without a token', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        type: Fishtank.editionTypes.FINISH,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  test('It should reject a request without a non-JWT token', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        type: Fishtank.editionTypes.FINISH,
        token: 'test',
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  test('It should reject a request with an invalid token', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        type: Fishtank.editionTypes.FINISH,
        token: invalidUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  /* User validation */
  test('It should reject a request from a user that doesn\'t own the fishtank', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        type: Fishtank.editionTypes.FINISH,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  /* Type validation */
  test('It should reject a request without a type', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });

  test('It should reject a request an non-numeric type', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    request(app).post('/api/fishtanks')
      .send({
        type: 'test',
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });

  test('It should reject a request with an invalid type', async () => {
    await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    const invalidType = Math.max(...Object.values(Fishtank.editionTypes)) + 1;

    request(app).post('/api/fishtanks')
      .send({
        type: invalidType,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });
});
