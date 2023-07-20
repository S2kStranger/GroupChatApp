const express = require('express');
const router = express.Router();
const controller=require('./controllers/chatcontrollers');

router.get('/', controller.getMessage);

router.post('/', controller.postMessage);

module.exports = router;