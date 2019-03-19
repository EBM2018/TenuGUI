const socketIo = require('socket.io');

let io;

const matchSocketWithUser = (socket) => {
  let socketUser; // info de la socket courrante, represente l'utilisateur
  /**
     * Catches a `socket.emit('login', token)` sent when the user authentication success response
     * is received by the front-end
     */
  socket.on('login', (token) => {
    console.log(token);
    // TODO: Verify token validity, retrieve user data, match socket to user id
    // Set userType variable
    // MAJ socketUser en fonction de ce qui est renvoyé
    matchUserWithRoom(socket, socketUser);
  });

  // TODO :  disconnectUser
  socket.on('disconnect', disconnectUser);
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

// Assign specific room to user
const matchUserWithRoom = (socket, socketUser) => {
  if (socketUser.userType === 'owner') {
    socket.join('ownerRoom');
    addOwnerEvent(socket);
  } else if (socketUser.userType === 'student') {
    socket.join('studentRoom');
    socketUser.stopButton = false;
    addStudentEvent(socket);
  } else {
    socket.join('spectateRoom');
  }
};

const addOwnerEvent = (socket) => {

};

const addStudentEvent = (socket) => {
  socket.on('stopButton', () => {
    const stopNumber = stopButtonNumber();
    // envoyer une alert via le socket du prof/admin
    io.to('adminRoom').emit('alertButton', stopNumber);
  });
};

module.exports = {
  init, createSocketsNameSpaceForFishtank, emitNewInteraction,
};
