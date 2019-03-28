const { Router } = require('express');
const Controller = require('../../controllers/login.js');
const Middlewares = require('../../middlewares/login.js');

const router = new Router();

router.post('/', Middlewares.post, Controller.post);

module.exports = router;
