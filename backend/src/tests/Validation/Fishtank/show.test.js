const request = require('supertest');
const sinon = require('sinon');
const faker = require('../../Fakers/index.js');
const { sequelize, Fishtank, FishtankStatus } = require('../../../database/models');
const { getRequestUrlInTests } = require('../../../services/formatter.js');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user from Teamy who is always part of tested shoals and owns most of this suite's fishtanks
}, {
  id: 1,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im11cmFzYWlzZ3JlYXR0aG8ifQ.p4PpEK6QQukfVrSQdsJsY1QIrQzY7OEFtmdN_JPrRgY', // A valid user from Teamy who is never part of tested shoals
}];
const invalidUsers = [{
  id: 2,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im1hcmlzYWJlc3RnaXJsIn0.nlo6R0RtfL9J7UClyJjianLucJK8705WI8zATLsTKXg', // An invalid user according to Teamy
}];

describe('Fishtank retrieval validation', () => {
  let app;
  let requestLoader;
  let mockTeamy;

  beforeEach(() => {
    requestLoader = require('../../../middlewares/requestLoading/');
    mockTeamy = require('../../../__mock_teamy__');
    sinon.stub(requestLoader, 'addUser')
      .callsFake(faker.addUser(validUsers));
    sinon.stub(mockTeamy, 'isUserPartOfShoal')
      .callsFake(faker.isUserPartOfShoal([validUsers[0]]));
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

  test('It should accept a valid request from a user part of the fishtank\'s shoal', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });
    fishtank.setDataValue('status', await fishtank.getStatus());

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: validUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({
          fishtank: {
            id: fishtank.id,
            ownerId: fishtank.ownerId,
            shoalId: fishtank.shoalId,
            createdAt: fishtank.createdAt,
            status: { name: fishtank.getDataValue('status').name },
          },
          interactions: `${getRequestUrlInTests(res)}/api/fishtanks/${fishtank.id}/interactions`,
        });
      });
  });

  test('It should accept a valid request from the fishtank owner', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[1].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });
    fishtank.setDataValue('status', await fishtank.getStatus());

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: validUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({
          fishtank: {
            id: fishtank.id,
            ownerId: fishtank.ownerId,
            shoalId: fishtank.shoalId,
            createdAt: fishtank.createdAt,
            status: { name: fishtank.getDataValue('status').name },
          },
          interactions: `${getRequestUrlInTests(res)}/api/fishtanks/${fishtank.id}/interactions`,
        });
      });
  });

  /* Token validation */
  test('It should reject an empty request', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({})
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  test('It should reject a request with a non-JWT token', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: 'test',
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  test('It should reject a request with an invalid token', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: invalidUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });

  /* Fishtank validation */
  test('It should reject a request with an invalid fishtank id', async () => {
    const maxFishtankId = await Fishtank.max('id');
    return request(app)
      .get(`/api/fishtanks/${maxFishtankId + 1}`)
      .send({
        token: validUsers[0].token,
      })
      .set('Content-Type', 'application/json')
      .expect(422);
  });

  /* User validation */
  test('It should reject a request from a user with no rights over the desired fishtank', async () => {
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    return request(app)
      .get(`/api/fishtanks/${fishtank.id}`)
      .send({
        token: validUsers[1].token,
      })
      .set('Content-Type', 'application/json')
      .expect(401);
  });
});
