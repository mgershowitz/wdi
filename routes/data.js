const express   = require('express');
const data      = express.Router()
const db        = require('../models/data')

// const sendJSONresp = (req,res)=>res.render('index',{sales: res.rows})
// data.route('/get')
//   .get(db.walchartCall, (req,res)=>res.json(res.sales.weekly_sales))

// data.route('/')
//   .get(db.walchartCall, (req,res)=>res.render('index',{sales: res.sales.weekly_sales}))

data.route('/')
  .get(db.walchartCall, (req,res)=>res.json(res.sales))


module.exports = data;



