const { Router } = require('express');
const Controller = require('../../controllers/user.js');

const router = new Router();

/**
 * @api {get} /users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiDescription Returns a JSON containing the list of Teamy users
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     name: 'BDH',
 *     id: 0,
 *   }, {
 *     name: 'Hamza',
 *     id: 1,
 *     shoalId: 5,
 *   }, {
 *     name: 'Batou',
 *     id: 2,
 *     shoalId: 99999,
 *   }
 * ]
 */
router.get('/', Controller.show);

module.exports = router;
