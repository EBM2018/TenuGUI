const socketIo = require('socket.io');

let io;

const matchSocketWithUser = (socket) => {
  /**
   * Catches a `socket.emit('login', token)` sent when the user authentication success response
   * is received by the front-end
   */
  // TODO: Add front-end login emitter
  socket.on('login', (token) => {
    console.log(token);
    // TODO: Verify token validity, retrieve user data, match socket to user id
  });
};

const init = (server) => {
  io = socketIo(server);
  io.on('connection', socket => matchSocketWithUser(socket));
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
