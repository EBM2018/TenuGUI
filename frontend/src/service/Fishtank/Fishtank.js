import { postFishtankInteraction } from '../API/interactions';

class StudentFishtank {
    static askQuestion = (fishtankId, text) => {
      postFishtankInteraction(fishtankId, 2, text);
    };

    static askSpeedUp = (fishtankId) => {
      postFishtankInteraction(fishtankId, 3, '');
    };

    static askSpeedDown = (fishtankId) => {
      postFishtankInteraction(fishtankId, 4, '');
    };

    static notUnderstand = (fishtankId) => {
      postFishtankInteraction(fishtankId, 5, '');
    };

    static askPause = (fishtankId) => {
      postFishtankInteraction(fishtankId, 6, '');
    };

    static askReexplain = (fishtankId) => {
      postFishtankInteraction(fishtankId, 7, '');
    };

    static askDetails = (fishtankId) => {
      postFishtankInteraction(fishtankId, 8, '');
    };

    static askExample = (fishtankId) => {
      postFishtankInteraction(fishtankId, 9, '');
    };

    static askAnecdote = (fishtankId) => {
      postFishtankInteraction(fishtankId, 10, '');
    };

    static askReference = (fishtankId) => {
      postFishtankInteraction(fishtankId, 11, '');
    };

    static askExercice = (fishtankId) => {
      postFishtankInteraction(fishtankId, 12, '');
    };

    static askStop = (fishtankId) => {
      postFishtankInteraction(fishtankId, 2, '');
    };
}

export default StudentFishtank;
