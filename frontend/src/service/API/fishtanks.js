import { handleFishtankCreation } from '../Websockets/handlers';

const request = require('superagent');

export const createFishtank = callback => request
  .post('/api/fishtanks')
  .send({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
    shoalId: 1,
  })
  .set('Accept', 'application/json')
  .then(res => handleFishtankCreation((res.body.fishtankId)))
  .then(callback);

export default {};
