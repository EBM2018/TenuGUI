const { Router } = require('express');
const Controller = require('../../../controllers/fishtankInteraction.js');
const Middlewares = require('../../../middlewares/fishtankInteraction.js');

const router = new Router({ mergeParams: true });

router.post('/', ...Middlewares.create, Controller.create);
router.get('/', ...Middlewares.show, Controller.show);

module.exports = router;
