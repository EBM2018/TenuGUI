const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const {
  sequelize,
  Fishtank,
  FishtankInteractionType,
  FishtankStatus,
} = require('../../../database/models');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user who owns most of this suite's fishtanks
}, {
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im11cmFzYWlzZ3JlYXR0aG8ifQ.p4PpEK6QQukfVrSQdsJsY1QIrQzY7OEFtmdN_JPrRgY', // A valid user who is always part of the fishtank's shoal
}];
const invalidUsers = [{
  id: 2,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im1hcmlzYWJlc3RnaXJsIn0.nlo6R0RtfL9J7UClyJjianLucJK8705WI8zATLsTKXg', // An invalid user according to Teamy
}];

describe('Fishtank creation validation', () => {
  let app;
  let requestLoader;
  let mockTeamy;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    mockTeamy = require('../../../__mock_teamy__');
    sinon.stub(requestLoader, 'addUser')
      .callsFake(faker.addUser(validUsers));
    sinon.stub(mockTeamy, 'isUserPartOfShoal')
      .callsFake(faker.isUserPartOfShoal([validUsers[1]]));
    app = require('../../../');
  });

  afterEach(() => {
    requestLoader.addUser.restore();
    mockTeamy.isUserPartOfShoal.restore();
  });

  afterAll(async (done) => {
    await sequelize.close();
    done();
  });

  test('It should accept a valid emergency press', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        type: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({});
      });
  });

  test('It should reject an emergency press on an invalid fishtank', async () => {
    const maxFishtankId = await Fishtank.max('id');

    return request(app)
      .post(`/api/fishtanks/${maxFishtankId.id + 1}/interactions`)
      .send({
        type: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });

  test('It should reject an emergency press on a finished fishtank', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.FINISHED,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        type: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });

  test('It should reject an emergency press on an expired fishtank', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.EXPIRED,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        type: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });

  test('It should reject an emergency press without a token', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        type: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  test('It should reject an emergency press with an invalid token', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        type: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
        token: invalidUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  test('It should reject an interaction without a type', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .post(`/api/fishtanks/${fishtank.id}/interactions`)
      .send({
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
<<<<<<< HEAD
      .expect(422);
=======
<<<<<<< HEAD
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({});
      });
=======
      .expect(422);
>>>>>>> 98bd6ca4052945b6d2356f4dfd9e5e21519afc8e
>>>>>>> develop
  });
});
