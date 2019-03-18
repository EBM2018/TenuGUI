const { Router } = require('express');
const Controller = require('../../../controllers/fishtankInteractionType.js');

const router = new Router({ mergeParams: true });

/**
 * @api {get} /fishtanks/interactions/types Get fishtank interactions types
 * @apiName GetFishtankInteractionTypes
 * @apiGroup FishtankInteractions
 * @apiDescription Returns a JSON containing a list of fishtank interaction types
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 *   {
 *     "ACTIVITY_SUBMIT": 1,
 *     "EMERGENCY_PRESS": 2
 *   }
 */
router.get('/', Controller.show);

module.exports = router;
