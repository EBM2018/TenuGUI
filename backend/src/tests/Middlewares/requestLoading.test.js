const rewire = require('rewire');
const sinon = require('sinon');
const faker = require('../Fakers/index.js');

const {
  sequelize, Fishtank, FishtankStatus, FishtankInteractionType,
} = require('../../database/models');

const requestLoading = rewire('../../middlewares/requestLoading');
// eslint-disable-next-line no-underscore-dangle
const loadRequestWith = requestLoading.__get__('loadRequestWith');

const validUsers = [{
  id: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJlaW11YmVzdGdpcmwifQ.mQuD55X_12rMliQbUhsZmO12WFhsduEkXoaTJ5R8-YQ', // A valid user from Teamy who is always part of tested shoals and owns most of this suite's fishtanks
}];

describe('Request loading', () => {
  let addFishtank;
  let addUser;
  let addFishtankInteractionType;
  let mockTeamy;

  beforeEach(() => {
    mockTeamy = require('../../__mock_teamy__');
    sinon.stub(mockTeamy, 'getUser')
      .callsFake(faker.getUser(validUsers));
    sinon.stub(mockTeamy, 'getUserToken')
      .callsFake(faker.getUserToken(validUsers));
    ({
      addFishtank, addUser, addFishtankInteractionType,
    } = require('../../middlewares/requestLoading'));
  });

  afterEach(() => {
    mockTeamy.getUser.restore();
    mockTeamy.getUserToken.restore();
  });

  afterAll(async (done) => {
    await sequelize.close();
    done();
  });

  test('It should correctly load a request', () => {
    const req = {
      locals: {},
    };
    loadRequestWith(req, 'foo', 'bar');
    expect(req.locals).toEqual({ foo: 'bar' });
  });

  test('It should correctly load a request without a locals sub-object', () => {
    const req = {};
    loadRequestWith(req, 'foo', 'bar');
    expect(req.locals).toEqual({ foo: 'bar' });
  });

  test('It correctly loads a request with a fishtank', async () => {
    const req = {
      locals: {},
    };
    const fishtank = await Fishtank.create({
      ownerId: validUsers[0].id,
      shoalId: 0,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });
    const fishtankAddedToRequest = await addFishtank(fishtank.id, { req });
    const retrievedFishtank = await Fishtank.findByPk(fishtank.id);

    expect(fishtankAddedToRequest).toBe(true);
    expect(req.locals).toEqual({ fishtank: retrievedFishtank });
  });

  test("It shouldn't load a request when the fishtank is invalid", async () => {
    const req = {
      locals: {},
    };
    const maxFishtankId = await Fishtank.max('id');
    const fishtankAddedToRequest = await addFishtank(maxFishtankId + 1, { req });

    expect(fishtankAddedToRequest).toBe(false);
    expect(req.locals).toEqual({});
  });

  test('It should correctly load a request with a user when given a token', async () => {
    const req = {
      locals: {},
    };
    const userAddedToRequest = await addUser(validUsers[0].token, { req });

    expect(userAddedToRequest).toBe(true);
    expect(req.locals).toEqual({
      user: validUsers[0],
    });
  });

  test("It shouldn't load a request when given an invalid token", async () => {
    const req = {
      locals: {},
    };
    const userAddedToRequest = await addUser(null, { req });

    expect(userAddedToRequest).toBe(false);
    expect(req.locals).toEqual({});
  });

  test('It should correctly load a request with a fishtank interaction type', async () => {
    const req = {
      locals: {},
    };

    const fishtankInteractionTypeAddedToRequest = await addFishtankInteractionType(
      FishtankInteractionType.EMERGENCY_PRESS, { req },
    );
    const retrievedFishtankInteractionType = await FishtankInteractionType.findByPk(
      FishtankInteractionType.EMERGENCY_PRESS,
    );

    expect(fishtankInteractionTypeAddedToRequest).toBe(true);
    expect(req.locals).toEqual({
      fishtankInteractionType: retrievedFishtankInteractionType,
    });
  });
});
