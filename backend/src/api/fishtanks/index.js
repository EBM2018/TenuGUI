const { Router } = require('express');
const FishtankController = require('../../controllers/fishtank.js');
const FishtankMiddlewares = require('../../middlewares/fishtank.js');

const router = new Router();

router.use('/:id/interactions', require('./fishtankInteractions'));

/**
 * @api {post} /fishtanks Create Fishtank
 * @apiName PostFishtanks
 * @apiGroup Fishtanks
 * @apiDescription Creates a new fishtank and returns a JSON containing its id
 * @apiSuccess {Integer} fishtankId id of the new fishtank
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 * {
 *   "fishtankId": 3
 * }
 */
router.post('/', ...FishtankMiddlewares.create, FishtankController.create);

/**
 * @api {get} /fishtanks/:id Get Fishtank
 * @apiName GetFishtank
 * @apiGroup Fishtanks
 * @apiDescription Returns a JSON containing data on a given fishtank
 * @apiParam  {Integer} id id of a fishtank
 * @apiParamExample  {String} Request-Example:
 * id: 2
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "createdAt": "23/02/2019 00:06:40",
 * "id": 2,
 * "ownerId": 2,
 * "shoalId": 5,
 * "status": {
 *   "name": "ONGOING"
 * }
}
 */
router.get('/:id', ...FishtankMiddlewares.read, FishtankController.read);

/**
 * @api {patch} /fishtanks/:id Edit Fishtank data
 * @apiName PatchFishtank
 * @apiGroup Fishtanks
 * @apiDescription This URL receives edition requests for a given fishtank
 * @apiParam  {Integer} id Number identifying the fishtank
 * @apiParamExample  {String} Request-Example:
 * type: 1
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 */
router.patch('/:id', ...FishtankMiddlewares.edit, FishtankController.edit);

module.exports = router;
