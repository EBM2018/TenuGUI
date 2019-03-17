const { Router } = require('express');
const Controller = require('../../controllers/login.js');

const router = new Router();

router.post('/', Controller.post); // TODO: Add middlewares, at least request loading with req.body.id

module.exports = router;
