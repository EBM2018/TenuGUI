const { Router } = require('express');
const Controller = require('../controllers/');

const router = new Router();

router.get('/', Controller.show);

router.use('/fishtanks', require('./fishtanks'));
router.use('/users', require('./users'));

module.exports = router;
