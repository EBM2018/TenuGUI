const io = require('socket.io-client');

let socket = io.connect('/');

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
