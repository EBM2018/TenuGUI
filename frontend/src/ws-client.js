const io = require('socket.io-client');

let socket = io.connect('/');

const moveSocketToFishtankNamespace = (fishtankId) => {
  socket.close();
  socket = io.connect(`/fishtank-${fishtankId}`);
  return socket;
};

module.exports = {
  moveSocketToFishtankNamespace,
};
