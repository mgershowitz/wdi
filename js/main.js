console.log('loaded')
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
         ['$<%=sales.weekly_sales%> weekly sales for the one data inquire', <%=parseInt(sales.weekly_sales)%>],
         ["Sadness", 90000],
         ["react and chart.js don't mix well", 50000]

         // ['Onions', 1],
         // ['Olives', 1],
         // ['Zucchini', 1],
         // ['Pepperoni', 2]
       ]);

       // Set chart options
       var options = {'title':'How Much sadness is in our project',
                      'width':800,
                      'height':600};

       // Instantiate and draw our chart, passing in some options.
       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
       chart.draw(data, options);
     }
