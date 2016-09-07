'use strict'
const request = require('request')
module.exports = {

walchartCall(req,res,next) {
console.log(req)
  request({
      url:'http://localhost:4000/predict',
      method:'get',
      qs: {
        Temperature: req.query.t,
        Fuel_Price: req.query.f,
        CPI: req.query.c,
        Unemployment: req.query.u,
        IsHoliday: req.query.i,
        Type: req.query.ty,
        Size: req.query.s,
        Dept: req.query.d
      },
      json:true
    }
    ,(err,result,body)=>{
      if (err) throw err;
      res.rows = result.body
      console.log("the sales results: ", res.rows)
      next()
    })
  }
}





