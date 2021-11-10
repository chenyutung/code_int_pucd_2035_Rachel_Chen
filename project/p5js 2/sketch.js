function setup() {
  createCanvas(710, 400);
background(0)
}

// Touch within the image to change
// the value of the rectangle

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function touchStarted() {
  if (value === 'pink') {
    value = 0;
  } else {
    value = 'pink';
  }
}

