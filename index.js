const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
var usersRouter = require('./routes/users')
var reference = require('./routes/m011/getBillByReference')
var code = require('./routes/m011/getBillByDebtorCode')
var search = require('./routes/invoice/search')
var hold = require('./routes/invoice/hold')
var settle = require('./routes/invoice/settle')

app.use(morgan('dev'))

//routes



app.get('/', (req, res) => {
  res.send('https://m-011.kstro1990.repl.co/m011 ')
})

app.use('/users', usersRouter);
app.use('/recaudo', reference);
app.use('/recaudo', code);
app.use('/invoice', search);
app.use('/invoice', hold);
app.use('/invoice', settle);


//settle


app.get('/getBillByDebtorID', (req, res) => {
  billResponse = {
    'status': 'aprove',
    'description': 'pagos des una ventanilla'
  }
  res.send(billResponse);
})


app.get('/getBillByDebtorCode', (req, res) => {
  billResponse = {
    'status': 'aprove',
    'description': 'pagos des una ventanilla'
  }
  res.send(billResponse);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})