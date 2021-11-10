function setup() {
  createCanvas(710, 400);
background('pink')

}


let x = 0;
function draw() {
  if (x > 100) {
    x = 0;
  }
fill('red');
noStroke();
ellipse(67, 67, 20, 20);
ellipse(83, 67, 20, 20);
triangle(91, 73, 75, 95, 59, 73);
  x=x+0.1;
  describe('pink square with red heart' + round(x) + ' moving to the right');
}





  
