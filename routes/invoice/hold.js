var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hold', function(req, res, next) {
  res.send('se busca la facturas desde el documento m-030');
});

router.post('/hold', function(req, res, next) {
  console.log(req.body);
  repuesta =
  {
    "status": {
      "status": "OK",
      "reason": "00",
      "message": "La petición se ha procesado correctamente",
      "date": "2019-03-20T10:45:33-05:00"
    },
    "data": {
      "id": 5,
      "status": "HOLD",
      "debtor": {
        "document": "1040035000",
        "documentType": "CC"
      },
      "payment": {
        "reference": "20328",
        "description": "123",
        "amount": {
          "taxes": [
            {
              "kind": "valueAddedTax",
              "amount": 1000,
              "base": 0
            }
          ],
          "details": [
            {
              "kind": "subtotal",
              "amount": 99000
            }
          ],
          "currency": "COP",
          "total": "100000.00"
        },
        "allowPartial": false,
        "shipping": null,
        "items": null,
        "recurring": null,
        "subscribe": false,
        "fields": null,
        "agreement": null,
        "agreementType": null,
        "gds": null
      },
      "altReference": null,
      "createdAt": "2019-03-20",
      "expirationDate": "2019-04-19 23:59:59",
      "finalDate": "2019-04-19 23:59:59",
      "siteId": 1
    }
  }


  res.send(repuesta);
});

module.exports = router;
