let sizeW, sizeH, numShapes;
let x, y;

// Circle colors
let circleColors = [
  '#FF6B6B',
  '#4DABF7',
  '#FFD43B',
  '#69DB7C',
  '#B197FC'
];

let colorIndex = 0;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  numShapes = 20;

  sizeW = width / numShapes;
  sizeH = height / numShapes;

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);

  // Rectangles
  for (let i = numShapes; i > 0; i--) {

    fill('orange');

    // Rectangle line color
    stroke('blue');
    strokeWeight(3);

    rect(x, y, sizeW * i, sizeH * i);
  }

  // Change circle color every 2 seconds
  colorIndex = floor(millis() / 2000) % 5;

  // Circle
  fill(circleColors[colorIndex]);
  noStroke();

  ellipse(width / 2, height / 2, 500, 100);

  //cricle 
  fill('#c8caff');
  noStroke();
  ellipse(width / 2, height / 2.5, 250, 100); 

  //cricle
  fill('#58c50c');
  noStroke();
  ellipse(width / 2, height / 2.5, 50, 50); 

  // triangle
  fill('#58c50c');
  noStroke();
  triangle(width / 2, height / 2.5, width / 2 - 30, height / 2.1, width / 2 + 30, height / 2.1);  

// circle
push();

translate(width / 1.9, height / 2.44);
rotate(radians(-25));

fill('#000000');
noStroke();
ellipse(0, 0, 20, 10);

pop();

  push();

translate(width / 2.12, height / 2.44);
rotate(radians(25));

fill('#000000');
noStroke();
ellipse(0, 0, 20, 10);

pop();

  // Make rectangles grow
  sizeW++;
  sizeH++;

  // Restart
  if (sizeW > width) {
    sizeW = 0;
    sizeH = 0;
  }

  if (sizeH > height) {
    sizeH = 0;
    sizeW = 0;
  }
}