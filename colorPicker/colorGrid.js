window.onload = function() {
  var canvas = document.getElementById("canvas"),
    c = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    time = 0;

  update();

  function update() {
    colorGrid(7, 10, width / 2, height / 2);
  }

  function colorGrid(count, radius, xOffset, yOffset) {
    var xSpacing = Math.sqrt(3) * radius;
    var ySpacing = radius * 1.5;
    var firstRow = 1 - count;
    var lastRow = count;

    index = 0;
    for (var i = firstRow; i < count; i++) { //rows
      var firstCol = 1 - count + Math.floor(Math.abs(i / 2));
      var lastCol = count - Math.abs(i) + Math.floor(Math.abs(i / 2));
      debug = "";
      for (var j = firstCol; j < lastCol; j++) { //columns
        var x = j * xSpacing + xOffset;
        var y = i * ySpacing + yOffset;
        polygon(c, 6, x + (Math.abs(i % 2) * (xSpacing / 2)), y, radius);

        c.fillStyle = getPaletteColor(index++);
        c.fill();
        debug += j - i + " ";
        //debug += color + " ";
      }
      console.log(debug);
    }
  }
};
