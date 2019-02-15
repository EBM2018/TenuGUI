const { Router } = require('express');
const FishtankController = require('../../controllers/fishtank.js');

const router = new Router();

/**
 * @api {get} /fishtanks Get fishtanks
 * @apiName GetFishtanks
 * @apiGroup Static Pages
 * @apiDescription This URL displays the current list of fishtanks
 * @apiSuccessExample {html} Success-Response:
 *     HTTP/1.1 200 OK
 *     Fishtanks list:
 */
router.get('/', (req, res) => res.send('Fishtanks list:'));

/**
 * @api {post} /fishtanks Post fishtank
 * @apiName PostFishtanks
 * @apiDescription This URL receives new fishtank declarations
 * @apiSuccessExample {html} Success-Response:
 *     HTTP/1.1 200 OK
 */
router.post('/', FishtankController.create);

/**
 * @api {get} /fishtanks/:id Gets fishtank data
 * @apiName GetFishtank
 * @apiGroup Static Pages
 * @apiDescription This URL displays data about a given fishtank
 *
 * @apiParam  {Integer} id Number identifying the fishtank
 * @apiParamExample  {String} Request-Example:
 id: 1
 *
 * @apiSuccessExample {html} Success-Response:
 HTTP/1.1 200 OK
 Hello, 1!
 */
router.get('/:id', (req, res) => res.send(`Hello, ${req.params.id}!`));

router.use('/:id/interactions', require('./fishtankInteractions'));

module.exports = router;