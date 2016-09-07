// import React     from 'react'

// const {Line}    = require("react-chartjs");

// import chart     from './chart.js'
const React = require('react');
const Chart = require('chart.js');
const LineChart = require("react-chartjs").Line;

// var MyChart = React.createClass({
  // render: function(){
    // return <LineChart data=chart.data width="600" height="250">
  // }
// })
export default class Results extends React.Component {
  render(){
    return (

       <LineChart id="walmart" data={chart.data} width="600" height="250"/>


      )

  }

}

