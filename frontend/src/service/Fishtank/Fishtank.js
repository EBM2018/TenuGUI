import { sendNewInteractionEmission } from '../API/requests';

class StudentFishtank {
    static askQuestion = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 1, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Student ask a question.');
    };

    static askSpeedUp = (fishtankId) => {
      // alert('Student want to accelerate.');
      if (sendNewInteractionEmission(fishtankId, 2, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askSpeedDown = (fishtankId) => {
      // alert('Student want to slow down.');
      if (sendNewInteractionEmission(fishtankId, 3, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static notUnderstand = (fishtankId) => {
      // alert('Student do not understand.');
      if (sendNewInteractionEmission(fishtankId, 4, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askStop = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askReexplain = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askDetails = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askExample = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askAnecdote = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askReference = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };

    static askExercice = (fishtankId) => {
      // alert('Student want to stop.');
      if (sendNewInteractionEmission(fishtankId, 5, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
    };
}

export default StudentFishtank;
