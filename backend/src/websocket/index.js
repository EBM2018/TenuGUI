const socketIo = require('socket.io');

let io;

const init = (server) => {
  io = socketIo(server);
  return io;
};

const handleSocketConnection = (socket) => {
  console.log('connected');
  socket.emit('bonjour');
};

const createSocketsNameSpaceForFishtank = (fishtankId) => {
  const newFishtankSocketsNamespace = io.of(`/fishtank-${fishtankId}`);
  newFishtankSocketsNamespace.on('connection', () => console.log('now we private'));
};


/*
const openFishtankWebsocket = (newFishtankId) => {
  const newFishtank = io.of(`/${newFishtankId}`);

  newFishtank.on('connection', (socket) => {
    let socketUser = null;
    console.log('Bienvenue sur TenuGui');

    socket.on('login', (logInfo) => {
      socketUser = {
        id: logInfo.id,
      };

      console.log(logInfo);

      if (connectionType(logInfo) === 'owner') {
        socket.join('ownerRoom');
      } else if (connectionType(logInfo) === 'student') {
        socket.join('studentRoom');
      } else {
        socket.join('spectateRoom');
      }
    });
  });
};

const pingOwner = () => {
  io.to('ownerRoom').emit('alertButton');
};

module.exports = {
  openFishtankWebsocket, pingOwner
};
*/

module.exports = {
  init, handleSocketConnection, createSocketsNameSpaceForFishtank,
};
