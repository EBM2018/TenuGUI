const request = require('superagent');

export const getUserFixture = () => request
  .get('/api/users')
  .set('Accept', 'application/json')
  .then(res => res.body);

export const getUserTokenFixture = id => request
  .post('/api/login')
  .set('Accept', 'application/json')
  .send({ id })
  .then(res => res.body);

export default {};
