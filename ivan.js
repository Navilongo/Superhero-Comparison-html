// Villain teams - Sinister Six vs. Suicide Squad
/*
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

  */
 
// Comparison of every Sinister Six members and their skills to show who is superior
/*

  var trace1 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [95, 50, 50, 35, 55, 65],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Doctor Octopus'
  };
  
  var trace2 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [85, 20, 70, 70, 90 , 55],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Electro'
  };

  var trace3 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [90, 20, 25, 40, 15, 70],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Kingpin'
  };

  var trace4 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [80, 30, 35, 40, 25, 85],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Kraven the Hunter'
  };

  var trace5 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [75, 50, 60, 70, 75, 55],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'The Lizard'
  };

  var trace6 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [65, 80, 45, 90, 35, 85],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Rhino'
  };

  var trace7 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [90, 40, 35, 45, 65, 95],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Sandman'
  };

  var trace8 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [90, 10, 50, 20, 65, 100],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Taskmaster'
  };

  var trace9 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [80, 10, 25, 70, 80, 55],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Shocker'
  };

  var trace10 = {
	x: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	y: [90, 20, 40, 25, 25, 30],
	mode: 'markers+lines',
	type: 'scatter',
	name: 'Vulture'
  };
 
  
  var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];
  
  Plotly.newPlot('myDiv', data);

  */

  // Avengers vs X men
  
/*
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
*/

// Avengers visualized individually

var av_trace1 = {
	x: [100, 35, 50, 60, 65, 80],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Antman',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace2 = {
	x: [70, 15, 50, 30, 20, 65],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Falcon',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace3 = {
	x: [75, 5, 10, 10, 25, 50],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Hawkeye',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace4 = {
	x: [60, 100, 85, 100, 100, 85],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Hulk',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace5 = {
	x: [95, 15, 30, 45, 35, 85],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Nick Fury',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace6 = {
	x: [80, 30, 100, 60, 80, 55],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Quicksilver',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace7 = {
	x: [90, 55, 65, 70, 70, 80],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Spider-man',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace8 = {
	x: [85, 100, 100, 100, 100, 100],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Thor',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace9 = {
	x: [100, 70, 55, ,95, 100, 70],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'Vision',
	orientation: 'h',
	
	type: 'bar'
  };

  var av_trace10 = {
	x: [80, 80, 65, 100, 100, 85],
	y: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
	name: 'War Machine',
	orientation: 'h',
	
	type: 'bar'
  };
  
  
  
  var av_data = [av_trace1, av_trace2, av_trace3, av_trace4, av_trace5, av_trace6, av_trace7, av_trace8, av_trace9, av_trace10];
  
  var av_layout = {
	title: 'MCU Avengers Visualized',
	barmode: 'stack'
  };
  
  Plotly.newPlot('avengers', av_data, av_layout);
