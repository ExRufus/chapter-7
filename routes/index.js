var express = require('express');
const pagesController = require('../controller/pageController')
var router = express.Router();

/* GET home page. */
router.get('/', pagesController.index);
router.get('/detail', pagesController.detail);

module.exports = router;