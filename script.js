console.log("this is script.js comment");

var value = 255;

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background('#FFE0D1');
}

function draw() {
  noFill();
  stroke(value);
  strokeWeight(2);
  line(mouseX, mouseY, pmouseX, pmouseY);

}

function mouseReleased() {
  if (value == 255) {
    value = '#FF6564';
  } else {
    value = 255;
  }

}
