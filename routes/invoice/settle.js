var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hold', function(req, res, next) {
  res.send('se busca la facturas desde el documento m-030');
});

router.post('/hold', function(req, res, next) {
  repuesta =
  {
    "status": {
        "status": "OK",
        "reason": "00",
        "message": "La petición se ha procesado correctamente",
        "date": "2018-11-13T11:30:37-05:00"
    },
    "receipt": 1511
}

  res.send(repuesta);
});

module.exports = router;
