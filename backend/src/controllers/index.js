const { getRequestUrl } = require('../services/formatter.js');

module.exports = {
  routes: (req, res) => {
    res.status(200).send({
      fishtanks: `${getRequestUrl(req)}/api/fishtanks`,
    });
  },
};
