const routerx = require('express-promise-router');
const inviteRouter = require('./invite');
const router = routerx();

router.use('/invite',inviteRouter);
module.exports = router;