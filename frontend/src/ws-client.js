const io = require('socket.io-client');

let socket = io.connect('/');

const moveToSocketsNamespaceForFishtank = (fishtankId) => {
  socket.disconnect();
  socket = io.connect(`/fishtank-${fishtankId}`);
};

/*
// Une fois connecté on se met sur le bon namespace
const connectionEvent = (fishtankId) => {
  socket.disconnect();
  socket = io.connect(`/${fishtankId}`);
};

// Lors de l'evenement de login
// TODO Yousbaff envoie/récupère les infos de log
const loginEvent = (logInfo) => {
  socket.emit('login', logInfo);
};

// Affichage d'une pop up lorsque quelqu'un appui sur un bouton
socket.on('alertButton', () => {
  // Call a method that will :
  // * make a Superagent call to get the interactions data
  // * feed said data to the right handlers
});

module.exports = {
  connectionEvent, loginEvent
};
*/

module.exports = {
  moveToSocketsNamespaceForFishtank,
};
