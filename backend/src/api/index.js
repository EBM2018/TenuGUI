const { Router } = require('express');

const router = new Router();

// TODO: Should be a glossary for available routes
router.get('/', (req, res) => res.send('Hello, I am APIGUI!'));

router.use('/fishtanks', require('./fishtanks'));

module.exports = router;
