const io = require('socket.io-client').listen('http://localhost:3000');

/*
Logique du programme
Lorsqu'un utilisateur arrive sur la page un socket s'ouvre
Lorsqu'il se connecte, il est placé dans une room avec le reste des personnes de cette room
L'objet usersConnected possèdera des objets eleves qui permettront de suivre leurs actions tout
au long de la connexion
Lorsque quelqu'un lance un event, tout nouveau scope permettra d'enrichir l'objet liés aux users
Par exemple pour un quizz : ajouter une prop currentQuestion, Answer1, Answer2 ... selon ce
qui est necessaire
Quand l'activité se termine, les users reprennent leur valeur initiale
*/


//
// Objets communs à tout les utilisateurs des sockets
//

const usersConnected = []; // objet qui contient la liste de tout les users non utile pour le moment

const openFishtank = []; // liste des fishtank en cours

// TODO Leno doit appeler cette fonction lors de la creation d'un fishtank. il faut tester le scope
const updateFishtankNamespace = function (newFishtankId) {
  const newFishtank = io.of(`/${newFishtankId}`);
  openFishtank.push(newFishtank);

  newFishtank.on('connection', (socket) => {
    // celui qui utilise actuellement cette socket, false (non connecté) par defaut
    let socketUser = false;
    console.log('Bienvenue sur TenuGui'); // Un petit bonjour

    //
    // Evenement gérant la connexion
    //

    socket.on('login', (logInfo) => { // lorsque l'on se log
      socketUser = { // un socket pour décrire l'utilisateur courant
        id: logInfo.id,
      };

      // TODO leno faire une fonction qui renvoi le type de connection
      if (connectionType(logInfo) === 'owner') {
        socket.join('ownerRoom');
      } else if (connectionType(logInfo) === 'student') {
        socket.join('studentRoom');
        socketUser.stopButton = false;
      } else {
        socket.join('spectateRoom');
      }
      usersConnected.push(socketUser);
    });

    //
    // Evenement gérant la deconnexion
    //

    socket.on('disconnect', () => { // evenement lorsqu'un user se deconnecte
      usersConnected.splice(usersConnected.indexOf(socketUser), 1);
    });

    // Evenement appui sur le bouton d'arret d'urgence
    // TODO Leno passer stopNumber le nombre de personne ayant appuyer sur le bouton
    socket.on('stopButton', () => {
      const stopNumber = stopButtonNumber();
      // envoyer une alert via le socket du prof/admin
      io.to('adminRoom').emit('alertButton', stopNumber);
    });

    //
    // Evenement démarrant une activité
    //

    socket.on('startActivity', (activity) => {
      // TODO Ajout des valeurs propres a l'activité
      // TODO Ajout des events propre à l'activité
    });
  });
};
