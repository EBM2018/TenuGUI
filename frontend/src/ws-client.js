// Avant la page de connection on est dans le namespace standard
let socket = io.connect(`http://localhost:3000/`);

// Une fois connecté on se met sur le bon namespace
const connectionEvent = function(fishtankId) {
    socket.disconnect();
    socket = io.connect(`http://localhost:3000/${fishtankId}`);
};

// Lors de l'evenement de login
// TODO Yousbaff envoie/récupère les infos de log
const loginEvent = function(logInfo) {
    socket.emit('login',logInfo)
};

// Lorsqu'un utilisateur appui sur le boutton
const stopButtonEvent = function(){
    socket.emit('stopButton')
};

// Affichage d'une pop up lorsque quelqu'un appui sur un bouton
socket.on('alertButton', function(stopNumber){
    let s =""; // variable pour l'orthograpahe :p
    if (stopNumber > 1) s= "s";
    alert(`${stopNumber} personne${s} ont appuyé sur le bouton stop !!`); // une alerte est envoyé sur le
});
