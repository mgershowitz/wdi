'use strict'


const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
const dataRoute   = require('./routes/data')
const homeRoute   = require('./routes/home_router')
const port        = process.argv[2] || process.env.PORT || 3000


app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'public')));



app.use(bodyParser.json());


app.use('/walchart', dataRoute)

app.use('/', homeRoute)


app.listen(port, ()=>{
  console.log('Server maxin\' and relaxin\' at ', port)
})
