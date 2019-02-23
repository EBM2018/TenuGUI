const moment = require('moment');

module.exports = {
  formatDate: (utc) => {
    if (utc == null) return utc;
    return moment(utc).format('DD/MM/YYYY HH:mm:ss');
  },
};
