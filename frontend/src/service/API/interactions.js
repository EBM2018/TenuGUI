const request = require('superagent');

// TODO: Replace plain tokens with tokens stored in cookies
// TODO: Explore the API to get the routes (instead of hard coding them in the front end)
// TODO: Handle errors

export const handleNewInteractionEmission = fishtankId => request
  .get(`/api/fishtanks/${fishtankId}/interactions`)
  .query({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  })
  .set('Accept', 'application/json')
  .then(res => res.body);

export default {};
