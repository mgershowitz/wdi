console.log('loaded')

let twoWeek  = 0
let oneWeek  = 0
let thisWeek = 0

const getSalesReport = (temp,fuel,cpi,unemploy,holiday,type,size,dept) => {
  return fetch(`/walchart?t=${temp}&f=${fuel}&c=${cpi}&u=${unemploy}&i=${holiday}&ty=${type}&s=${size}&d=${dept}`)
    .then(res=>res.json())
    .then(res=>{
      twoWeek = oneWeek;
      oneWeek = thisWeek;
      thisWeek = res.weekly_sales;
      })
}

// getSalesReport(42.5,8.6,100.0,2.2,1,1,145000,15)

// Load the Visualization API and the corechart package.
     google.charts.load('current', {'packages':['corechart']});

     // Set a callback to run when the Google Visualization API is loaded.
     google.charts.setOnLoadCallback(drawChart);

     // Callback that creates and populates a data table,
     // instantiates the pie chart, passes in the data and
     // draws it.
     function drawChart() {

       // Create the data table.
       var data = new google.visualization.DataTable();
       data.addColumn('string', 'Stores');
       data.addColumn('number', 'Sales');
       data.addRows([
         ["2 weeks", twoWeek],
         ["1 week", oneWeek],
         ["This Week", thisWeek]
       ]);

       // Set chart options
       var options = {'title':'Weekly Sales',
                      'width':800,
                      'height':600};

       // Instantiate and draw our chart, passing in some options.
       var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
       chart.draw(data, options);
     }

$(()=>{
  $('#button').on('click',(e) => {
    console.log('clicked')
    e.preventDefault();
    let temp     = $("#temp").val()
    let fuel     = $("#fuel").val()
    let cpi      = $("#cpi").val()
    let unemploy = $("#unemploy").val()
    let holiday  = $("#holiday").val()
    let type     = $("#type").val()
    let size     = $("#size").val()
    let dept     = $("#dept").val()
    getSalesReport(temp,fuel,cpi,unemploy,holiday,type,size,dept)
  })
})














