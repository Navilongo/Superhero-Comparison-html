// Submit Button handler
//function handleSubmit() {
    // Prevent the page from refreshing
    //d3.event.preventDefault();
  
    // Select the input value from the form
    //var heroes = d3.select("#heroesInput").node().value;
    //console.log(heroes);
  
    // clear the input value
    //d3.select("#heroesInput").node().value = "";
  
    // Build the plot with the new stock
    //buildPlot(heroes);
  //}

  function buildPlot(heroes) {
    //var apiKey = "YOUR KEY HERE";
  
    var path = require("./data/json/heroes.json");
  

  d3.json(path).then(function(data) {
    // Grab values from the response json object to build the plots
    var name = data.dataset.Superhero;
    var gender = data.dataset.gender;
    var race = data.dataset.race;
    var alignment = data.dataset.alignment;
    var intelligence = data.dataset.intelligence;
    // Print the names of the columns
    //console.log(data.dataset.column_names);
    // Print the data for each day
    //console.log(data.dataset.data);
    //var dates = data.dataset.data.map(row => row[0]);
    // console.log(dates);
    //var closingPrices = data.dataset.data.map(row => row[4]);
    // console.log(closingPrices);

    var trace1 = {
      type: "scatter",
      //mode: "lines",
      name: name,
      x: race,
      y: alignment,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `alignment vs race`,
      xaxis: {
        //range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);

  