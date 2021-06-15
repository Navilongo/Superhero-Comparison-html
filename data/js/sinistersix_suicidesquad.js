// Villain teams - Sinister Six vs. Suicide Squad

var trace1 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [84, 33, 13, 17, 55, 70],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Sinister Six'
  };
  
  var trace2 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [83, 26, 34, 57, 65, 78],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Suicide Squad'
  };
 
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('myDiv', data);