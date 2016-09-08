'use strict'
const request = require('request')
module.exports = {

walchartCall(req,res,next) {
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
      res.sales = result.body
      // res.sales = result.body.weekly_sales
      console.log(result.body,"======================")
      next()
    })
  }
}





