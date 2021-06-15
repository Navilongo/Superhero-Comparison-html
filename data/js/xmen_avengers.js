// Avengers vs X men
  
  var trace1 = {
	x: [86, 29, 40, 37, 91, 80],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'X-Men',
	orientation: 'h',
	marker: {
	  color: 'rgba(65, 131, 215, 1)',
	  width: 1
	},
	type: 'bar'
  };
  
  var trace2 = {
	x: [84, 51, 61, 67, 70, 75],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'The Avengers',
	orientation: 'h',
	type: 'bar',
	marker: {
	  color: 'rgba(207, 0, 15, 1)',
	  width: 1
	}
  };
  
  var data = [trace1, trace2];
  
  var layout = {
	title: 'Colored Bar Chart',
	barmode: 'stack'
  };
  
  Plotly.newPlot('x_men_avengers', data, layout);