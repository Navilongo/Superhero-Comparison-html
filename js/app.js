// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElem =  d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elemValue = changedElem.property("value");
    console.log(elemValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElem.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elemValue) {
      filters[filterId] = elemValue;
    }
    else {
      delete filters[filterId];
    }

    // updateTable();

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values. can't use a forEach, must split keyvalue pairs
    // can Object.entries(filters), Object.keys, Object.entries - key, value pairs set to a var, can use the forEach on
    // new var, similar to list of list. Can use a for loop. listvariable: the object.entries kv pairs 
    // for ([var1, var2] of listvariable) { can use var1, var2 = key:value pair }
    
    let filteredList = Object.entries(filters);
    console.log(filteredList);

    let date = d3.select("#Universe").property("value");
    let city = d3.select("#gender").property("value");
    let state = d3.select("#race").property("value");
    let shape = d3.select("#alignment").property("value");
    let country = d3.select("#intelligence").property("value");
    
    for (i in filteredList) {
      
      if (Universe) {
        filteredData = filteredData.filter(row => row.Universe === Universe);
      }
      
      if (gender) {
        filteredData = filteredData.filter(row => row.gender === gender);
      }

      if (race) {
        filteredData = filteredData.filter(row => row.race === race);
      }

      if (alignment) {
        filteredData = filteredData.filter(row => row.alignment === alignment);
      }

      if (intelligence) {
        filteredData = filteredData.filter(row => row.intelligence === intelligence);
      }

      // else {
      //   delete filteredList[i];
      // }
    }

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
buildTable(tableData);