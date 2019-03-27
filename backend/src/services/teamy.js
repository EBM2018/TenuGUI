const mockRequests = require('./__mock_teamy__/index.js');
const teamyRequests = require('./teamy/index.js');

module.exports = process.env.NODE_ENV === 'production' ? teamyRequests : mockRequests;
