const { Router } = require('express');
const FishtankController = require('../../controllers/fishtank.js');

const router = new Router();

/**
 * @api {post} /fishtanks Create Fishtank
 * @apiName PostFishtanks
 * @apiGroup Fishtanks
 * @apiDescription This URL receives new fishtank declarations
 * @apiSuccessExample {html} Success-Response:
 * HTTP/1.1 201 OK
 */
router.post('/', FishtankController.create);

/**
 * @api {get} /fishtanks/:id Request Fishtank data
 * @apiName GetFishtank
 * @apiGroup Fishtanks
 * @apiDescription This URL displays data about a given fishtank
 * @apiParam  {Integer} id Number identifying the fishtank
 * @apiParamExample  {String} Request-Example:
 id: 1
 * @apiSuccessExample {html} Success-Response:
 HTTP/1.1 200 OK
 Hello, 1!
 */
router.get('/:id', FishtankController.read);

router.use('/:id/interactions', require('./fishtankInteractions'));

module.exports = router;
