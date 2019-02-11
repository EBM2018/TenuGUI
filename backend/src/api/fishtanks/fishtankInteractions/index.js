const { Router } = require('express');

const router = new Router({mergeParams: true});

/**
 * @api {get} /fishtanks/:id/interactions Get fishtank interactions
 * @apiName GetFishtankInteractions
 * @apiGroup Static Pages
 * @apiDescription This URL displays data about a given fishtank interactions
 *
 * @apiParam  {Integer} id Number identifying the fishtank
 * @apiParamExample  {String} Request-Example:
 id: 1
 *
 * @apiSuccessExample {html} Success-Response:
 HTTP/1.1 200 OK
 Fishtank 1 interactions :
 */
router.get('/', (req, res) => res.send(`Fishtank ${req.params.id} interactions :`));
module.exports = router;