const express = require('express')
const router = express.Router();
const Visitors = require('../controllers/visitor.controller')

router.post('/register',Visitors.register);
router.get('/visitors',Visitors.findAll);

module.exports = router;
