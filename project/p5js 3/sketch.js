function setup() {
  createCanvas(150, 100);
}
function draw() {
  background(0);
  fill('white');

  if (mouseIsPressed) {
    fill('red');
noStroke();
ellipse(67, 40, 20, 20);
ellipse(83, 40, 20, 20);
triangle(91, 47, 75, 65, 59, 47);
  } else {
    rect(50, 25, 50, 50);
  }

  print(mouseIsPressed);
}