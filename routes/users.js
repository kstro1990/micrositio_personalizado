var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ubicacion de desde el router de los usurios');
});

module.exports = router;
