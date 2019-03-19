const socketIo = require('socket.io');

let io;

// Fonction qui ajoute les evenement sur un socket Student
const addStudentEvent = (socket) => {
  socket.on('stopButton', () => {
    // TODO : Faire une fonction qui renvoi le nombre de personne ayant appuyé sur le stop button
    const stopNumber = 1;
    // envoyer une alert via le socket du prof/admin
    io.to('adminRoom').emit('alertButton', stopNumber);
  });
};

// Fonction qui ajoute les evenement sur un socket Owner
const addOwnerEvent = (socket) => {
  socket.on('startActivity', (activity) => {
    // TODO Ajout des valeurs propres a l'activité
    // TODO Ajout des events propre à l'activité
  });
};

// Assign specific room to user
const matchUserWithRoom = (socket, socketUser) => {
  if (socketUser.userType === 'owner') {
    socket.join('ownerRoom');
    addOwnerEvent(socket);
  } else if (socketUser.userType === 'student') {
    socket.join('studentRoom');
    addStudentEvent(socket);
  } else {
    socket.join('spectateRoom');
  }
};

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

module.exports = {
  init, createSocketsNameSpaceForFishtank, emitNewInteraction,
};
