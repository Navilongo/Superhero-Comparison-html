
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