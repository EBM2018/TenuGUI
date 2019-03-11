import { moveSocketToFishtankNamespace } from '../Websockets/index';

const request = require('superagent');

// TODO: Replace plain tokens with tokens stored in cookies
// TODO: Explore the API to get the routes (instead of hard coding them in the front end)
// TODO: Handle errors

/*
shoalId = nb du groupe
token = token de connection
 */

const handleNewInteractionEmission = fishtankId => request
  .get(`/api/fishtanks/${fishtankId}/interactions`)
  .query({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  })
  .set('Accept', 'application/json')
  .then(res => res.body);

export const createFishtank = callback => request
  .post('/api/fishtanks')
  .send({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
    shoalId: 1,
  })
  .set('Accept', 'application/json')
  .then((res) => {
    const socket = moveSocketToFishtankNamespace(res.body.fishtankId);
    socket.on('newInteraction', async () => {
      const fishtankInteractions = await handleNewInteractionEmission(res.body.fishtankId);
      console.log(fishtankInteractions);
    });
  })
  .then(callback);

export const showFishtank = id => request
  .get(`/api/fishtanks/${id}`)
  .send({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
  })
  .set('Accept', 'application/json')
  .then(res => res.body);




export default {};
