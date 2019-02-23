const io = require('socket.io').listen('http://localhost:3000');

io.sockets.on('connection', function(socket){
  console.log('bienvenue sur TenuGui');
});