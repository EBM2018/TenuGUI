const { Router } = require('express');
const Controller = require('../../controllers/userController.js');

const router = new Router();

router.get('/', Controller.show);

module.exports = router;
