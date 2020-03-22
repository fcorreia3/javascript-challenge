// from data.js
var tableData = data;

// YOUR CODE HERE!

// print data to the console
console.log(tableData);

// 1. POPULATE THE TABLE
// Get a reference to the table body with d3
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with the given data
tableData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// 2. SEARCH FUNCTION
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

//   // Set the date in the form to be the input value
//   d3.select("#datetime.form-control").text(inputValue);

  // Create the filtering function
  
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);

  function filteredAll(report) {
    return report.datetime === inputValue;
  }
    
  var newtableData = tableData.filter(filteredAll);
  console.log(newtableData);

  newtableData.forEach((report) => {
    Object.entries(report).forEach(([key, value]) => 
    {console.log(`"Key is: "{'key}" and Value is: " {value}`);})
  });


  //Populating the table with the filtered data

  if (filteredData.length < tableData.length) {
      
      //Delete initial table
      tbody.html(""); 
      if (inputValue == "") {
        tableData.forEach((UFOReport) => {
          var row = tbody.append("tr");
          Object.entries(UFOReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
      }

      else {
        newtableData.forEach((report) => {
          var row2 = tbody.append("tr");
            console.log(row2);
            Object.entries(report).forEach(([key, value]) => {
              var cell2 = row2.append("td");
              cell2.text(value);
              });
        }); 
      }
      
      console.log("got here");
          // Populate new table
      
    };
});
