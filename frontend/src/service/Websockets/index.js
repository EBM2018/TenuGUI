const io = require('socket.io-client');

let socket = io.connect('/');

export const moveSocketToFishtankNamespace = (fishtankId) => {
  socket.close();
  socket = io.connect(`/fishtank-${fishtankId}`);
  return socket;
};

export default {};
