const express = require('express')
const router = express.Router();
const Visitors = require('../controllers/visitoip.controller')

router.post('/visitordata',Visitors.createIp);


module.exports = router;