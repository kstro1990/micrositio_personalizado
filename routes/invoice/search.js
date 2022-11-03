var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search', function(req, res, next) {
  res.send('se busca la facturas desde el documento m-030');
});

router.post('/search', function(req, res, next) {
  response = {
    'auth': {
      'login': '07ad8d9b5f6a2f734efc1b177a168610',
      'tranKey': 'QpMzwH/Urr07uH/uiZrQveOGmR4=',
      'nonce': 'TldJM1lXRm1PREJrT0dabU16TTBZekF6Wm1ReU16STFNV0pqTm1VNU1HWT0=',
      'seed': '2022-11-02T15:10:36-05:00'
    },
    'agreement': '1636',
    'searchType': 'document',
    'searchValue': '1040035000',
    'siteId': '07ad8d9b5f6a2f734efc1b177a168610'
  },
    repuesta =
    {
      "status": {
        "status": "OK",
        "reason": "00",
        "message": "La petición se ha procesado correctamente",
        "date": "2018-11-13T11:24:27-05:00"
      },
      "data": [
        {
          "id": 5,
          "status": "ACTIVE",
          "debtor": {
            "document": "1040035000",
            "documentType": "CC",
            "name": "Diego",
            "surname": "Calle",
            "email": "kstroinv@yopmail.com"
          },
          "payment": {
            "reference": "123456",
            "description": "Testing",
            "amount": {
              "taxes": [
                {
                  "kind": "valueAddedTax",
                  "amount": 1900,
                  "base": 10000
                }
              ],
              "details": [
                {
                  "kind": "subtotal",
                  "amount": 130000
                }
              ],
              "currency": "COP",
              "total": "140000.00"
            },
            "allowPartial": false,
            "subscribe": false
          },
          "altReference": null,
          "createdAt": "2018-10-28T00:00:00-05:00",
          "expirationDate": "2018-11-27T23:59:59-05:00"
        }
      ]
    }

  res.send(repuesta);
});

module.exports = router;