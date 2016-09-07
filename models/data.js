'use strict'

const request = require('request')
module.exports = {

walchartCall(req,res,next) {
console.log(req)
request({
    url:'http://localhost:4000/predict?Temperature=42.5&Fuel_Price=4.6&CPI=100.0&Unemployment=8.2&IsHoliday=1&Type=1&Size=145000.0&Dept=15',
    method:'get',

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
  // walchartCall() {
  //   // let data = {a,b,c,d}
  //   return fetch('http://localhost:4000/predict?Temperature=42.5&Fuel_Price=4.6&CPI=100.0&Unemployment=8.2&IsHoliday=1&Type=1&Size=145000.0&Dept=4')
  //   .then(res => res.json() )
  //   .then(console.log('walchart call worked'))
  // },




