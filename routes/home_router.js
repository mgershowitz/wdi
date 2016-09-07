const express   = require('express');
const home      = express.Router()

// const sendJSONresp = (req,res)=>res.render('index',{sales: res.rows})

home.route('/')
  .get((req,res)=>res.render('index'))

module.exports = home;

