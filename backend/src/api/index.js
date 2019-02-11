const { Router } = require('express');

const router = new Router();

/**
 * @api {get} / Hello APIGUI
 * @apiName GetApiHome
 * @apiGroup Static Pages
 * @apiDescription This URL displays a simple Hello
 * @apiSuccessExample {html} Success-Response:
 *     HTTP/1.1 200 OK
 *     Hello, je suis l'APIGUI!
 */
router.get('/', (req, res) => res.send('Hello, I am APIGUI!'));

router.use('/fishtanks', require('./fishtanks'));

module.exports = router;
