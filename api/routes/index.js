const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/settings', controller.settings);

module.exports = router;
