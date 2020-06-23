function doColor() {
  var canvas = document.getElementById("can");
  var colorChange = document.getElementById("idl");
  canvas.style.backgroundColor = colorChange.value;
}

function doRange() {
  var slider = document.getElementById("ang");
  var size = slider.value;
  var canvas = document.getElementById("can");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(10, 10, size, size);
  context.fillRect(parseInt(size) + 20, 10, size, size);
  context.fillStyle = "yellow";
}
