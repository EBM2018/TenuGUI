const request = require('superagent');

export const createFishtank = shoalId => request
  .post('/api/fishtanks')
  .send({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
    shoalId,
  })
  .set('Accept', 'application/json');

export const showFishtank = (fishtankId, token) => request
  .get(`/api/fishtanks/${fishtankId}`)
  .query({
    token,
  })
  .set('Accept', 'application/json')
  .then(res => res.body);

export const getFishtank = token => request
  .get('/api/fishtanks')
  .query({
    token,
  })
  .set('Accept', 'application/json')
  .then(res => res.body);

export default {};
