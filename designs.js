// Select color input
// Select size input

// When size is submitted by the user, display a new blank grid
$("#sizePicker").submit(function makeGrid(event) {
  var canvas = $("#pixelCanvas");
  var numRows = $("#inputHeight").val();
  var numCols = $("#inputWidth").val();
  var table = "";

  // Clear the current canvas
  canvas.empty();

  // Loop over the height and width adding rows and elements with default background color
  for (var row=1; row<=numRows; row++) {
    table += "<tr>";
    for (var column=1; column<=numCols; column++) {
      table += "<td></td>";
    }
    table += "</tr>";
  }

  // Insert the new table into the DOM
  canvas.append(table);

  // Prevent the original HTML from reloading
  event.preventDefault();
});

// When a cell is clicked, change its color to the currently-selected color
// Attached to the body so dynamically-created elements will get the listener
$("body").on("click", "td", function changeColor(event) {
  var currentColor = $("#colorPicker").val();

  $(this).css("background-color", currentColor);

  event.preventDefault();
});
