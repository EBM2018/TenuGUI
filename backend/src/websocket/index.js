const socketIo = require('socket.io');

let io;

const matchSocketWithUser = (socket) => {
  /**
   * Catches a `socket.emit('login', token)` sent when the user authentication success response
   * is received by the front-end
   */
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
  newFishtankSocketsNamespace.on('connection', (socket) => {
    console.log(`Created namespace for fishtank ${fishtankId}`);
    matchSocketWithUser(socket);
  });
  newFishtankSocketsNamespace.emit('newInteraction');
};

const emitNewInteraction = (fishtankId) => {
  io.of(`/fishtank-${fishtankId}`).emit('newInteraction');
};

const emitFeedback = (fishtankId, id) => {
  console.log('I want feedback');
  io.of(`/fishtank-${fishtankId}`).emit('newFeedback', id);
};

module.exports = {
  init, createSocketsNameSpaceForFishtank, emitNewInteraction, emitFeedback,
};
