const { Router } = require('express');
const Controller = require('../../controllers/shoal.js');

const router = new Router();

/**
 * @api {get} /shoals
 * @apiName GetShoals
 * @apiGroup Shoals
 * @apiDescription Returns a JSON containing the list of Teamy shoals
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     id: 1,
 *     name: 'EBM'
 *   }, {
 *     id: 2,
 *     name: 'Maestro'
 *   }
 * ]
 */
router.get('/', Controller.show);

module.exports = router;
