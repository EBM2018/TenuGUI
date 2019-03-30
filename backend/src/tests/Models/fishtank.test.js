const { sequelize, Fishtank, FishtankStatus } = require('../../database/models');

describe('Fishtank model methods', () => {
  afterAll(async (done) => {
    await sequelize.close();
    done();
  });

  test('It should correctly return ongoing fishtanks', async () => {
    const maxShoalIdUsedInFishtanks = await Fishtank.max('shoalId');
    const ongoingFishtank = await Fishtank.create({
      ownerId: 0,
      shoalId: maxShoalIdUsedInFishtanks + 1,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });
    await Fishtank.create({
      ownerId: 0,
      shoalId: maxShoalIdUsedInFishtanks + 1,
      statusId: FishtankStatus.EXPIRED,
      closedAt: null,
    });
    await Fishtank.create({
      ownerId: 0,
      shoalId: maxShoalIdUsedInFishtanks + 1,
      statusId: FishtankStatus.FINISHED,
      closedAt: null,
    });

    const ongoingFishtanksAccordingToMethod = await Fishtank.getOngoingShoalFishtanks(
      maxShoalIdUsedInFishtanks + 1,
    );
    expect(ongoingFishtanksAccordingToMethod).toEqual({ fishtankIds: [ongoingFishtank.id] });
  });
});
