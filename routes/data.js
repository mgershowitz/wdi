const express   = require('express');
const data      = express.Router()
const db        = require('../models/data')

// const sendJSONresp = (req,res)=>res.render('index',{sales: res.rows})

data.route('/')
  .get(db.walchartCall, (req,res)=>res.render('index',{sales: res.sales.weekly_sales}))

module.exports = data;



