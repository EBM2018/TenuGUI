const { Router } = require('express');

const router = new Router({ mergeParams: true });

// TODO: websocket-y stuff
router.get('/', (req, res) => res.send(`Fishtank ${req.params.id} interactions :`));
module.exports = router;
