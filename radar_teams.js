data = [
    { // Sinister Six
    type: 'scatterpolar',
    r: [84, 33, 13, 17, 55, 70, 84],
    theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
    fill: 'toself',
    name: 'Sinister Six'
    },
    { // Suicide Squad
    type: 'scatterpolar',
    r: [83, 26, 34, 57, 65, 78, 83],
    theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
    fill: 'toself',
    name: 'Suicide Squad'
    },
    { // X-Men
    type: 'scatterpolar',
    r: [86, 29, 40, 37, 91, 80, 86],
    theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
    fill: 'toself',
    name: 'X-Men'
    },
    { // The Avengers
    type: 'scatterpolar',
    r: [84, 51, 61, 67, 70, 75, 84],
    theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
    fill: 'toself',
    name: 'The Avengers'
    },
    { // The Brotherhood of Evil Mutants
    type: 'scatterpolar',
    r: [81, 57, 46, 70, 79, 65, 81],
    theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
    fill: 'toself',
    name: 'The Brotherhood of Evil Mutants'
    },
    { // Fantastic Four
      type: 'scatterpolar',
      r: [86, 34, 59, 70, 86, 76, 86],
      theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
      fill: 'toself',
      name: 'Fantastic Four'
    },
    { // Guardians of the Galaxy
      type: 'scatterpolar',
      r: [88, 57, 39, 67, 54, 76, 88],
      theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
      fill: 'toself',
      name: 'Guardians of the Galaxy'
    },
    { // Secret Society of Super-Villains
      type: 'scatterpolar',
      r: [89, 67, 52, 70, 73, 78, 89],
      theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
      fill: 'toself',
      name: 'Secret Society of Super-Villains'
    },
    { // Watchmen
      type: 'scatterpolar',
      r: [88, 35, 32, 43, 48, 75, 88],
      theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
      fill: 'toself',
      name: 'Watchmen'
    },
    { // Justice League
      type: 'scatterpolar',
      r: [90, 43, 59, 70, 71, 84, 90],
      theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
      fill: 'toself',
      name: 'Justice League'
    },
    { // Teen Titans
      type: 'scatterpolar',
      r: [79, 39, 53, 57, 78, 66, 79],
      theta: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat", "Intelligence"],
      fill: 'toself',
      name: 'Teen Titans'
    }
  ]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 100]
      }
    }
  }
  
  Plotly.newPlot("myDiv", data, layout)