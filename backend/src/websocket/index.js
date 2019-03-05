const socketIo = require('socket.io');

let io;

const init = (server) => {
  io = socketIo(server);
  return io;
};

const createSocketsNameSpaceForFishtank = (fishtankId) => {
  const newFishtankSocketsNamespace = io.of(`/fishtank-${fishtankId}`);
  newFishtankSocketsNamespace.on('connection', () => console.log(`Created namespace for fishtank ${fishtankId}`));
  newFishtankSocketsNamespace.emit('newInteraction');
};

const emitNewInteraction = (fishtankId) => {
  io.of(`/fishtank-${fishtankId}`).emit('newInteraction');
};

module.exports = {
  init, createSocketsNameSpaceForFishtank, emitNewInteraction,
};
