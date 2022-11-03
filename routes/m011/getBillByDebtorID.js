var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getBillByDebtorID', function(req, res, next) {
  res.send('envia la referencia del reacudo para la facturas');
});

router.post('/getBillByDebtorID', function(req, res, next) {
  billResponse = {
    'status': 'aprove',
    'description': 'pagos des una ventanilla',
    'bills': {
      'reference': 'dfge46345d',
      'description': 'pago de SOAT por taquilla'
    },
    'debtorID': 1127895462,
    'debtorFirstName': 'Pedro',
    'debtorLastName': 'Perez',
    'debtorCode': 556522,
    'totalCharges': 0,
    'totalInterest': 0,
    'totalAmount': 56000,
    'creationDate': 5645,
    'number': null,
    'bank': 057,
    'amount': 0,
    'exchange': 'O'
  }
  res.send(billResponse);
});

module.exports = router;
