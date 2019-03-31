import { postFishtankInteraction } from '../API/interactions';

export class CommandFishtankAdmin {
    static askFeedback = (fishtankId) => {
      postFishtankInteraction(fishtankId, 18, '');
    };
}

export class ActionsFishtankAdmin {
    static askUnderstanding = (fishtankId) => {
      postFishtankInteraction(fishtankId, 14, '');
    };

    static askSummary = (fishtankId) => {
      postFishtankInteraction(fishtankId, 15, '');
    };

    static askPosition = (fishtankId) => {
      postFishtankInteraction(fishtankId, 16, '');
    };

    static askAttention = (fishtankId) => {
      postFishtankInteraction(fishtankId, 17, '');
    };
}
