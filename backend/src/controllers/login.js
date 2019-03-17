const { getUserToken } = require('../__mock_teamy__');

module.exports = {
  post: async (req, res) => {
    const userToken = await getUserToken(req.body.id);
    return res.status(200).send({ token: userToken });
  },
};
