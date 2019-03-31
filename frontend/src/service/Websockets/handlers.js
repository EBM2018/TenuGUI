import { moveSocketToFishtankNamespace } from './index';
import { getFishtankInteractions } from '../API/interactions';

export const handleFishtankCreation = (fishtankId, fctHandleInteractions, fctHandleFeedback) => {
  const socket = moveSocketToFishtankNamespace(fishtankId);
  socket.on('newInteraction', async () => {
    const fishtankInteractions = await getFishtankInteractions(fishtankId);
    fctHandleInteractions(fishtankInteractions);
  });
  socket.on('newFeedback', async () => {
    const fishtankInteractions = await getFishtankInteractions(fishtankId);
    fctHandleFeedback(fishtankInteractions);
  });
};

export default {};
