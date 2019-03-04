const { Router } = require('express');
const UserController = require('../../controllers/userController.js');

const router = new Router();

router.get('/', UserController.show);

module.exports = router;
