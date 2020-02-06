const router = require('express').Router();

const handle = require('../handlers');

router.get('/', handle.home);

module.exports = router;
