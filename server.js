'use strict'

// const env         = process.env.NODE_ENV || 'development';
// const DEV         = env==='development';
// const dotenv      = require('dotenv').config()

const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
const dataRoute   = require('./routes/data')
const port        = process.argv[2] || process.env.PORT || 3000
// const test        = require('./test/index.html')


app.use(morgan('dev'))
// app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'public')));


// app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.json());



app.use('/', dataRoute)

//app.use('/spoon', spoon)

//Dummy SQL database for API replacement during testing
// app.use('/testapi', testRoute)


app.listen(port, ()=>{
  console.log('Server maxin\' and relaxin\' at ', port)
})
