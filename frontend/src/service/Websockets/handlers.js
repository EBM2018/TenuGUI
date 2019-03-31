import { moveSocketToFishtankNamespace } from './index';
import { getFishtankInteractions } from '../API/interactions';

export const handleFishtankCreation = (fishtankId, interactionCallback) => {
  const socket = moveSocketToFishtankNamespace(fishtankId);
  socket.on('newInteraction', async () => {
    const fishtankInteractions = await getFishtankInteractions(fishtankId);
    interactionCallback(fishtankInteractions);
  });
  socket.on('newFeedback', (feedbackId) => {
    console.log(feedbackId);
  });
};

export default {};
