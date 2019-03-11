import { sendNewInteractionEmission } from '../API/requests';

export default askQuestion = (fishtankId) => {
  if (sendNewInteractionEmission(fishtankId, 1, '') === 'HTTP/1.1 201 OK') {
    return 'send';
  }
  return 'fail';
  // alert('Student ask a question.');
};
