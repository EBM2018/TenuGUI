const io = require('socket.io-client');

let socket = io.connect('/');

const addStudentEventListener = (currentSocket) => {
  currentSocket.on('alertButton', (stopNumber) => {
    let s = ''; // variable pour l'orthograpahe :p
    if (stopNumber > 1) s = 's';
    alert(`${stopNumber} personne${s} ont appuyé sur le bouton stop !!`); // une alerte est envoyé sur le
  });

  currentSocket.on('vousAvezCompris', () => {
    // TODO fonction pour gerer cette event
  });

  currentSocket.on('faitesResume', () => {
    // TODO fonction pour gerer cette event
  });

  currentSocket.on('vousEnEtesOu', () => {
    // TODO fonction pour gerer cette event
  });
};

const addOwnerEventListener = (currentSocket) => {
  currentSocket.on('rythme', (rythmeSelected) => {
    // TODO : selon le cas, faire ce qui faut quand un eleve appui sur le changement de rythme
    switch (rythmeSelected) {
      case 'plusVite':
        console.log("Un élève s'ennui");
        break;
      case 'moinsVite':
        console.log('Un élève se perd');
        break;
      case 'perdu':
        console.log('Un élève est perdu');
        break;
      case 'pause':
        console.log('Un élève demande une pause');
        break;
      default:
        console.log('je sais pas');
    }
  });
  currentSocket.on('precision', (precisionSelected) => {
    // TODO : Faire qqc de cette fonction
    switch (precisionSelected) {
      case 'plusVite':
        console.log("Un élève s'ennui");
        break;
      case 'moinsVite':
        console.log('Un élève se perd');
        break;
      case 'perdu':
        console.log('Un élève est perdu');
        break;
      case 'pause':
        console.log('Un élève demande une pause');
        break;
      default:
        console.log('je sais pas');
    }
  });
};

socket.on('setToStudentRoom', () => {
  addStudentEventListener(socket);
});

socket.on('setToOwnerRoom', () => {
  addOwnerEventListener(socket);
});

socket.on('showMessage', (message) => {
  alert(message);
});

export const authenticateSocket = () => {
  // TODO: Retrieve token in cookies
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc';
  console.log('bonjour');
  socket.emit('login', token);
};

export const moveSocketToFishtankNamespace = (fishtankId) => {
  socket.close();
  socket = io.connect(`/fishtank-${fishtankId}`);
  authenticateSocket();
  return socket;
};

export default {};
