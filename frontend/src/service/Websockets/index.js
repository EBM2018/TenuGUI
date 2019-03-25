const io = require('socket.io-client');

let socket = io.connect('/');

const addStudentEventListener = (currentSocket) => {
    currentSocket.on('alertButton', (stopNumber) => {
        let s = ''; // variable pour l'orthograpahe :p
        if (stopNumber > 1) s = 's';
        alert(`${stopNumber} personne${s} ont appuyé sur le bouton stop !!`); // une alerte est envoyé sur le
    });
};

const addOwnerEventListener = (currentSocket) => {

};

socket.on('setToStudentRoom', ()=> {
    addStudentEventListener(socket);
});

socket.on('setToOwnerRoom', ()=> {
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
