const {
  sequelize, Fishtank, FishtankStatus, FishtankInteraction, FishtankInteractionType,
} = require('../../database/models');

describe('Fishtank interactions model methods', () => {
  afterAll(async (done) => {
    await sequelize.close();
    done();
  });

  test('It should correctly return formatted interactions', async () => {
    const fishtank = await Fishtank.create({
      ownerId: 1,
      shoalId: 5,
      statusId: FishtankStatus.ONGOING,
      closedAt: null,
    });

    await FishtankInteraction.create({
      fishtankId: fishtank.id,
      userId: 0,
      typeId: FishtankInteractionType.PARTICIPANT.PAUSE_ASK,
      payload: {},
    });
    await FishtankInteraction.create({
      fishtankId: fishtank.id,
      userId: 0,
      typeId: FishtankInteractionType.PARTICIPANT.PAUSE_ASK,
      payload: {},
    });
    await FishtankInteraction.create({
      fishtankId: fishtank.id,
      userId: 0,
      typeId: FishtankInteractionType.PARTICIPANT.EMERGENCY_PRESS,
      payload: {},
    });

    const formattedInteractions = await FishtankInteraction.getFormattedInteractions(fishtank.id);
    expect(formattedInteractions.counts.pauseRequests).toBe(2);
    expect(formattedInteractions.counts.emergencyPresses).toBe(1);
    expect(formattedInteractions.counts.coolPresses).toBe(0);
  });
});
