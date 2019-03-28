import { sendNewInteractionEmission } from '../API/requests';

export class CommandFishtankAdmin {
    static startActivity = (fishtankId) => {

      // alert('Start an activity.');
    };

    static askSummary = (fishtankId) => {

      // alert('Ask for a summary.');
    };

    static askFeedback = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 18, '');
    };
}

export class ActionsFishtankAdmin {
    static askUnderstanding = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 14, '');
    };

    static askSummary = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 15, '');
    };

    static askPosition = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 16, '');
    };

    static askAttention = (fishtankId) => {
      sendNewInteractionEmission(fishtankId, 17, '');
    };
}
