const { Router } = require('express');
const Controller = require('../../../controllers/fishtankInteraction.js');
const Middlewares = require('../../../middlewares/fishtankInteraction.js');

const router = new Router({ mergeParams: true });

/**
 * @api {post} /fishtanks/:fishtankId/interactions Create fishtank interaction
 * @apiName PostFishtankInteraction
 * @apiGroup FishtankInteractions
 * @apiDescription Creates a fishtank interaction and ping relevant users through websockets
 * @apiParam (Param) {Integer} fishtankId id of a fishtank
 * @apiParam (Body) {Integer} type type of fishtank interaction
 * @apiParam (Body) {Object} payload payload of the fishtank interaction
 * @apiParamExample {json} Request-Example:
 *   {
 *     "id": 2
 *     "type": 2
 *     "payload": {}
 *   }
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 */
router.post('/', ...Middlewares.create, Controller.create);

/**
 * @api {get} /fishtanks/:fishtankId/interactions Get fishtank's interactions
 * @apiName GetFishtankInteractions
 * @apiGroup FishtankInteractions
 * @apiDescription Returns a JSON containing a description of the fishtank's interactions
 * @apiParam (Param) {Integer} fishtankId id of a fishtank
 * @apiParamExample {Integer} Request-Example:
 *   id: 2
 * @apiSuccess {Integer} type type of fishtank interaction
 * @apiSuccess {Object} payload payload of the fishtank interaction
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 */
router.get('/', ...Middlewares.show, Controller.show);

module.exports = router;
