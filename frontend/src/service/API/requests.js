const request = require('superagent');

const handleNewInteractionEmission = fishtankId => request
  .get(`/api/fishtanks/${fishtankId}/interactions`)
  .query({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  })
  .set('Accept', 'application/json')
  .then(res => res.body);

module.exports = {
  handleNewInteractionEmission,
};
