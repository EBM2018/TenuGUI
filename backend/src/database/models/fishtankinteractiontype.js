module.exports = (sequelize, DataTypes) => {
  const FishtankInteractionType = sequelize.define('FishtankInteractionType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emittableByAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    emittableByParticipant: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

<<<<<<< HEAD
  FishtankInteractionType.ACTIVITY_CHANGE = 1;
  FishtankInteractionType.EMERGENCY_PRESS = 2;
  FishtankInteractionType.FEEDBACK_SUBMIT = 3;
  FishtankInteractionType.COOL_PRESS = 4;
  FishtankInteractionType.PERIOD_CHANGE = 5;
=======
  FishtankInteractionType.ADMIN = {
    ACTIVITY_CHANGE: 1,
    PERIOD_CHANGE: 5,
    FEEDBACK_ASK: 19,
    ATTENTION_ASK: 17,
    UNDERSTANDING_ASK: 18,
    SUMMARY_ASK: 20,
    PROGRESSION_ASK: 21,
  };

  FishtankInteractionType.PARTICIPANT = {
    EMERGENCY_PRESS: 2,
    FEEDBACK_SUBMIT: 3,
    COOL_PRESS: 4,
    QUESTION_ASK: 6,
    FASTER_RHYTHM_ASK: 7,
    SLOWER_RHYTHM_ASK: 8,
    LOW_UNDERSTANDING_NOTIFY: 9,
    PAUSE_ASK: 10,
    EXPLANATIONS_ASK: 11,
    DETAILS_ASK: 12,
    EXAMPLES_ASK: 13,
    TRIVIA_ASK: 14,
    REFERENCE_ASK: 15,
    EXERCISE_ASK: 16,
  };
>>>>>>> 98bd6ca4052945b6d2356f4dfd9e5e21519afc8e

  return FishtankInteractionType;
};
