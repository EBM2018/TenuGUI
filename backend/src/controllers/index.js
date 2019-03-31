const { getRequestUrl } = require('../services/formatter.js');

module.exports = {
  show: (req, res) => {
    res.status(200).send({
      fishtanks: `${getRequestUrl(req)}/api/fishtanks`,
      users: `${getRequestUrl(req)}/api/users`,
      shoals: `${getRequestUrl(req)}/api/shoals`,
      login: `${getRequestUrl(req)}/api/login`,
    });
  },
};
