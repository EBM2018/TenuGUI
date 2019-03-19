const { Router } = require('express');
const Controller = require('../../controllers/fishtank.js');
const Middlewares = require('../../middlewares/fishtank.js');

const router = new Router();

router.use('/:fishtankId/interactions', require('./fishtankInteractions'));
router.use('/interactions/types', require('./fishtankInteractionTypes'));


router.get('/', Middlewares.index, Controller.index);

/**
 * @api {post} /fishtanks Create Fishtank
 * @apiName PostFishtanks
 * @apiGroup Fishtanks
 * @apiDescription Creates a new fishtank and returns a JSON containing its id
 * @apiSuccess {Integer} fishtankId id of the new fishtank
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 *   {
 *     "fishtankId": 3
 *   }
 */
router.post('/', ...Middlewares.create, Controller.create);

/**
 * @api {get} /fishtanks/:fishtankId Show Fishtank
 * @apiName GetFishtank
 * @apiGroup Fishtanks
 * @apiDescription Returns a JSON containing data on a given fishtank
 * @apiParam (Param) {Integer} fishtankId id of a fishtank
 * @apiParamExample {Integer} Request-Example:
 *   id: 2
 * @apiSuccess {Date} createdAt creation date of the fishtank
 * @apiSuccess {Integer} id of the fishtank
 * @apiSuccess {Integer} ownerId id of the fishtank's owner
 * @apiSuccess {Integer} shoalId id of the shoal associated to the fishtank
 * @apiSuccess {Object} status status of the fishtank
 * @apiSuccess {String} status.name
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *   {
 *     "createdAt": "23/02/2019 00:06:40",
 *     "id": 2,
 *     "ownerId": 2,
 *     "shoalId": 5,
 *     "status": {
 *       "name": "ONGOING"
 *     }
 *   }
 */
router.get('/:fishtankId', ...Middlewares.show, Controller.show);

/**
 * @api {patch} /fishtanks/:id Update Fishtank data
 * @apiName PatchFishtank
 * @apiGroup Fishtanks
 * @apiDescription Updates a fishtank's settings
 * @apiParam (Param) {Integer} fishtankId id of a fishtank
 * @apiParam (Body) {Integer} type type of patch request
 * @apiParamExample  {String} Request-Example:
 *   {
 *     "id": 1
 *     "type": 1
 *   }
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
router.patch('/:fishtankId', ...Middlewares.update, Controller.update);

module.exports = router;
