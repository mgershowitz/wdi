console.log('loaded')

let twoWeek = 0
let oneWeek = 0
let thisWeek = 0

const getSalesReport = () => {

}
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

         // ['Onions', 1],
         // ['Olives', 1],
         // ['Zucchini', 1],
         // ['Pepperoni', 2]
       ]);

       // Set chart options
       var options = {'title':'Weekly Sales',
                      'width':800,
                      'height':600};

       // Instantiate and draw our chart, passing in some options.
       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
       chart.draw(data, options);
     }
