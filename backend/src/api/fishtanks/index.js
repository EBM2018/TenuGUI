const { Router } = require('express');
const FishtankController = require('../../controllers/fishtank.js');
const FishtankMiddlewares = require('../../middlewares/fishtank.js');

const router = new Router();

/**
 * @api {post} /fishtanks Create Fishtank
 * @apiName PostFishtanks
 * @apiGroup Fishtanks
 * @apiDescription This URL receives new fishtank declarations
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 */
router.post('/', ...FishtankMiddlewares.create, FishtankController.create);

/**
 * @api {get} /fishtanks/:id Request Fishtank data
 * @apiName GetFishtank
 * @apiGroup Fishtanks
 * @apiDescription This URL displays data about a given fishtank
 * @apiParam  {Integer} id Number identifying the fishtank
 * @apiParamExample  {String} Request-Example:
 id: 1
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 []
 */
router.get('/:id', FishtankController.read);

/**
 * @api {patch} /fishtanks/:id Edit Fishtank data
 * @apiName PatchFishtank
 * @apiGroup Fishtanks
 * @apiDescription This URL receives edition requests for a given fishtank
 * @apiParam  {Integer} id Number identifying the fishtank
 * @apiParamExample  {String} Request-Example:
 type: 1
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 */
router.patch('/:id', ...FishtankMiddlewares.edit, FishtankController.edit);

router.use('/:id/interactions', require('./fishtankInteractions'));

module.exports = router;
