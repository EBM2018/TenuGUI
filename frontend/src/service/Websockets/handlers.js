import { moveSocketToFishtankNamespace } from './index';
import { handleNewInteractionEmission } from '../API/interactions';

export const handleFishtankCreation = (fishtankId) => {
  const socket = moveSocketToFishtankNamespace(fishtankId);
  socket.on('newInteraction', async () => {
    const fishtankInteractions = await handleNewInteractionEmission(fishtankId);
    console.log(fishtankInteractions);
  });
  socket.on('newFeedback', (feedbackId) => {
    console.log(feedbackId);
  });
};

export default {};
