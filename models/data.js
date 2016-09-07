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
      // qs: {
      //   Temperature: '42.2',
      //   Fuel_Price: '8.6',
      //   CPI: '100.0',
      //   Unemployment: '2.2',
      //   IsHoliday: '1',
      //   Type: '1',
      //   Size: '145000',
      //   Dept: '15'
      // },
      json:true
    }
    ,(err,result,body)=>{
      if (err) throw err;
      res.sales = result.body
      // res.sales = result.body.weekly_sales
      // console.log(typeof res.sales)
      next()
    })
  }
}





