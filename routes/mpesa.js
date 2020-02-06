const router = require('express').Router();

const handle = require('../handlers');
const middleware = require('../middlewares');

router.get('/access_token', middleware.accessToken, handle.accessToken);

module.exports = router;
