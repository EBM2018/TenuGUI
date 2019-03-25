const socketIo = require('socket.io');
const { getUser } = require('../__mock_teamy__');

let io;

// Fonction qui ajoute les evenement sur un socket Student
const addStudentEvent = (socket, socketUser) => {
  const fishtankId = socketUser.fishtank;
  io.of(`/fishtank-${fishtankId}`).to('studentRoom').emit('setToStudentRoom');
  socket.on('stopButton', () => {
    // TODO : Faire une fonction qui renvoi le nombre de personne ayant appuyé sur le stop button
    const stopNumber = 1;
    // envoyer une alert via le socket du prof/admin
    io.of(`/fishtank-${fishtankId}`).in('ownerRoom').emit('alertButton', stopNumber);
  });
};

// Fonction qui ajoute les evenement sur un socket Owner
const addOwnerEvent = (socket, socketUser) => {
  const fishtankId = socketUser.fishtank;
  io.of(`/fishtank-${fishtankId}`).to('ownerRoom').emit('setToOwnerRoom');
  socket.on('VousAvezComprisPushed', () => {
    io.of(`/fishtank-${fishtankId}`).in('studentRoom').emit('VousAvezCompris');
  });
  socket.on('faitesResumePushed', () => {
    io.of(`/fishtank-${fishtankId}`).in('studentRoom').emit('faitesResume');
  });
  socket.on('vousEnEtesOuPushed', () => {
    io.of(`/fishtank-${fishtankId}`).in('studentRoom').emit('vousEnEtesOu');
  });
};

// Assign specific room to user
const matchUserWithRoom = (socket, socketUser) => {
  if (socketUser.userType === 'owner') {
    socket.join('ownerRoom');
    addOwnerEvent(socketUser);
  } else if (socketUser.userType === 'student') {
    socket.join('studentRoom');
    addStudentEvent(socketUser);
  } else {
    socket.join('spectateRoom');
  }
};

const matchSocketWithUser = (socket, currentFishtank) => {
  let socketUser;
  socketUser.fishtank = currentFishtank; // info de la socket courrante, represente l'utilisateur
  /**
     * Catches a `socket.emit('login', token)` sent when the user authentication success response
     * is received by the front-end
     */
  socket.on('login', async (token) => {
    console.log(token);
    // Verify token validity, retrieve user data, match socket to user id
    socketUser = await getUser(token);
    socketUser.userType = ((socketUser.shoalId) ? 'student' : 'owner'); // si shoalId est defini c'est un etudiant
    matchUserWithRoom(socket, socketUser);
  });

  socket.on('disconnect', () => {
    console.log('Au revoir');
  });
};

const init = (server) => {
  io = socketIo(server);
  io.on('connection', socket => matchSocketWithUser(socket));
  return io;
};

const createSocketsNameSpaceForFishtank = (fishtankId) => {
  const currentFishtank = `/fishtank-${fishtankId}`;
  const newFishtankSocketsNamespace = io.of(currentFishtank);
  newFishtankSocketsNamespace.on('connection', (socket) => {
    console.log(`Created namespace for fishtank ${fishtankId}`);
    matchSocketWithUser(socket, currentFishtank);
  });
  newFishtankSocketsNamespace.emit('newInteraction');
};

const emitNewInteraction = (fishtankId) => {
  io.of(`/fishtank-${fishtankId}`).emit('newInteraction');
};

const pingStudentsFromFishtank = (fishtankId, message) => {
  io.of(`/fishtank-${fishtankId}`).to('studentRoom').emit('ping', message);
};

const pingAdminFromFishtank = (fishtankId, message) => {
  io.of(`/fishtank-${fishtankId}`).to('ownerRoom').emit('ping', message);
};

module.exports = {
  init,
  createSocketsNameSpaceForFishtank,
  emitNewInteraction,
  pingStudentsFromFishtank,
  pingAdminFromFishtank,
};
