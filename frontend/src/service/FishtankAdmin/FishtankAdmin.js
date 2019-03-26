import { sendNewInteractionEmission } from '../API/requests';

export class CommandFishtankAdmin {
    static startActivity = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 11, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Start an activity.');
    };

    static askSummary = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 12, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Ask for a summary.');
    };

    static askFeedback = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 13, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Ask for a feedback.');
    };
}

export class ActionsFishtankAdmin {
    static askUnderstanding = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 2, '');
      /*
      if (sendNewInteractionEmission(fishtankId, 6, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      */
      // alert('Open "Ask if they understand".');
    };

    static askAttention = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 7, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Open "Ask for attention".');
    };

    static askSummary = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 8, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Open "Ask for a summary".');
    };

    static askReboost = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 9, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Open "Reboot".');
    };

    static askPosition = (fishtankId) => {
      if (sendNewInteractionEmission(fishtankId, 10, '') === 'HTTP/1.1 201 OK') {
        return 'send';
      }
      return 'fail';
      // alert('Open "Ask where ther are".');
    };
}
