const { getShoals } = require('../__mock_teamy__');

module.exports = {
  show: async (req, res) => {
    const shoals = await getShoals();
    return res.status(200).send(shoals);
  },
};
