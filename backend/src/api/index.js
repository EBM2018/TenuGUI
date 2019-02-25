const { Router } = require('express');
const RootController = require('../controllers/');

const router = new Router();

router.get('/', RootController.show);

router.use('/fishtanks', require('./fishtanks'));

module.exports = router;
