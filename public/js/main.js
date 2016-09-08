'use strict'
// var myChart = new Chart({...})

console.log('loaded')

let twoWeek  = 0
let oneWeek  = 0
let thisWeek = 0

const getSalesReport = (temp,fuel,cpi,unemploy,holiday,type,size,dept) => {
  return fetch(`/walchart?t=${temp}&f=${fuel}&c=${cpi}&u=${unemploy}&i=${holiday}&ty=${type}&s=${size}&d=${dept}`)
    .then(res=>console.log('yes'))
      }


// getSalesReport(42.5,8.6,100.0,2.2,1,1,145000,15)

// Load the Visualization API and the corechart package.
     // google.charts.load('current', {'packages':['corechart']});

     // // Set a callback to run when the Google Visualization API is loaded.
     // google.charts.setOnLoadCallback(drawChart);

     // // Callback that creates and populates a data table,
     // // instantiates the pie chart, passes in the data and
     // // draws it.
     // function drawChart() {

     //   // Create the data table.
     //   var data = new google.visualization.DataTable();
     //   data.addColumn('string', 'Stores');
     //   data.addColumn('number', 'Sales');
     //   data.addRows([
     //     ["2 weeks", twoWeek],
     //     ["1 week", oneWeek],
     //     ["This Week", thisWeek]
     //   ]);

     //   // Set chart options
     //   var options = {'title':'Weekly Sales',
     //                  'width':800,
     //                  'height':600};

     //   // Instantiate and draw our chart, passing in some options.
     //   var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
     //   chart.draw(data, options);
     // }
// let ctx = $('#myChart');
// let myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

$(()=>{
  $('#button').on('click',(e) => {
    // e.preventDefault()
    console.log('clicked')
    let defaultTemp     = $("#temp").val()
    let defaultFuel     = $("#fuel").val()
    let defaultCpi      = $("#cpi").val()
    let defaultUnemploy = $("#unemploy").val()
    let defaultHoliday  = $("#holiday").val()
    let defaultType     = $("#type").val()
    let defaultSize     = $("#size").val()
    let defaultDept     = $("#dept").val()
    getSalesReport(defaultTemp,defaultFuel,defaultCpi,defaultUnemploy,defaultHoliday,defaultType,defaultSize,defaultDept)
  })
})














