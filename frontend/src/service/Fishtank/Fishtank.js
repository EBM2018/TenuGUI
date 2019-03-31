import { sendNewInteractionEmission } from '../API/requests';

class StudentFishtank {
    static askQuestion = (fishtankId, text) => {
      sendNewInteractionEmission(fishtankId, 2, text);
    };

    static askSpeedUp = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 3, '');
    };

    static askSpeedDown = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 4, '');
    };

    static notUnderstand = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 5, '');
    };

    static askPause = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 6, '');
    };

    static askReexplain = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 7, '');
    };

    static askDetails = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 8, '');
    };

    static askExample = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 9, '');
    };

    static askAnecdote = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 10, '');
    };

    static askReference = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 11, '');
    };

    static askExercice = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 12, '');
    };

    static askStop = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 1, '');
    };
}

export default StudentFishtank;
