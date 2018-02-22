console.log('reading js');

//initialize variable for video
var video;

//initialize color variables
var r = 255;
var g = 255;
var b = 255;
var a = 0;

//initialize canvas size variables
var canvasWidth = 640;
var canvasHeight = 480;

//function to create video
function setup() {
  var myCanvas = createCanvas(canvasWidth, canvasHeight);
  myCanvas.parent('myContainer');
  pixelDensity(1);
  video = createCapture(VIDEO);
  //hide video because drawing it on canvas
  video.hide();
}

function draw() {
  background(0)

  // A video image can also be tinted and resized just as with a PImage.
  image(video, 0, 0, canvasWidth, canvasHeight);
  fill(r, g, b, a);

  //top left
  rect(0, 0, width / 2, height / 2);

  //top right
  rect(width / 2, 0, width, height / 2);

  //bottom left
  rect(0, height / 2, width / 2, height);

  //bottom right
  rect(width / 2, 0, width, height);

  //hovering over different quadrants shows what color they will turn
  if (mouseX > width / 2 && mouseX < width && mouseY > height / 2 && mouseY < height) {
    //bottom right
    console.log('bottom right hover');
    fill(14, 57, 247, 150);
    rect(width / 2, height / 2, width, height);

  }

  if (mouseX > width / 2 && mouseX < width && mouseY < height / 2 && mouseY > 0) {
    //top right
    console.log('top right hover');
    fill(255, 206, 153, 150);
    rect(width / 2, 0, width, height / 2);
  }

  if (mouseX < width / 2 && mouseX > 0 && mouseY > height / 2 && mouseY < height) {
    //bottom left
    console.log('bottom left hover')
    fill(198, 162, 255, 150);
    rect(0, height / 2, width / 2, height);
  }

  if (mouseX < width / 2 && mouseX > 0 && mouseY < height / 2 && mouseY > 0) {
    //top left
    console.log('top left hover')
    fill(255, 69, 74, 150);
    rect(0, 0, width / 2, height / 2);
  }
}

function mouseClicked() {
  //make tint different colors based on mouse click location (four quads)
  if (mouseX > width / 2 && mouseX < width && mouseY > height / 2 && mouseY < height) {
    //bottom right
    tint(14, 57, 247);
  } else if (mouseX > width / 2 && mouseX < width && mouseY < height / 2 && mouseY > 0) {
    //top right
    tint(255, 206, 153);
  } else if (mouseX < width / 2 && mouseX > 0 && mouseY > height / 2 && mouseY < height) {
    //bottom left
    tint(198, 162, 255);
  } else if (mouseX < width / 2 && mouseX > 0 && mouseY < height / 2 && mouseY > 0) {
    //top left
    tint(255, 69, 74);
  } else {
    tint(255, 255, 255);
  }
}
