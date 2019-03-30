const { Router } = require('express');
const Controller = require('../controllers/');

const router = new Router();

/**
 * @api {get} / Show routes
 * @apiName GetRoutes
 * @apiGroup Routes
 * @apiDescription Show the basic API routes
 * @apiSuccess {String} fishtanks URL to access fishtanks
 * @apiSuccess {String} users URL to access users
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 *   {
 *     "fishtanks": "/api/fishtanks",
 *     "users": "/api/users",
 *   }
 */
router.get('/', Controller.show);

router.use('/fishtanks', require('./fishtanks'));
router.use('/users', require('./users'));
router.use('/shoals', require('./shoals'));
router.use('/login', require('./login'));

module.exports = router;
