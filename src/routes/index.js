var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

router.post('/', (req, res, next) => {
  res.redirect('/customers');
});

router.post('/', (req, res, next) => {
  res.redirect('/pet');
});

module.exports = router;
