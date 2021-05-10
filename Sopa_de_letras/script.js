function crearTablero() {
  // get the reference for the body
  var mybody = document.getElementById("mtabla");

  // creates <table> and <tbody> elements
  mytable = document.createElement("table");
  mytablebody = document.createElement("tbody");

  // creating all cells
  for (var j = 0; j < 7; j++) {
    // creates a <tr> element
    mycurrent_row = document.createElement("tr");

    for (var i = 0; i < 5; i++) {
      // creates a <td> element
      mycurrent_cell = document.createElement("td");
      // creates a Text Node
      currenttext = document.createTextNode(
        "cell is row " + j + ", column " + i
      );
      // appends the Text Node we created into the cell <td>
      mycurrent_cell.appendChild(currenttext);

      if (i % 2 == 0) {
        mycurrent_cell.className = "caja2";
      } else {
        mycurrent_cell.className = "caja3";
      }
      // appends the cell <td> into the row <tr>
      mycurrent_row.appendChild(mycurrent_cell);
    }

    // appends the row <tr> into <tbody>
    mytablebody.appendChild(mycurrent_row);
  }

  // appends <tbody> into <table>
  mytable.appendChild(mytablebody);
  // appends <table> into <body>
  mybody.appendChild(mytable);
  // sets the border attribute of mytable to 2;
  mytable.setAttribute("border", "2");
}
