let angle = 0;
let phaseScale = 0;
let phaseColor = 0;
const sizeRatio = 2;
const sizeRatioOffset = sizeRatio * 2.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mouseX = windowWidth / 1;
  mouseY = windowHeight / 1;
}

function draw() {
  push();
    translate(mouseX, mouseY);
    rotate(angle);
    scale(sizeRatio * sin(phaseScale) + 1);
  
     var d = random(255);
      var e = random(255);
      var f = random(255);
      fill(d,e,f);
      noStroke();
      ellipse(mouseX, mouseY,10,10);

  colorMode(RGB, 360, 100, 100, 1);
    strokeWeight(0.1);
    stroke(0,0);
  
  line(30, 20, 85, 20);
  stroke(126);
  line(85, 20, 85, 75);
  stroke(255);
  line(85, 75, 30, 75);
  
    let c = color(phaseColor, 100, 100, 0.05);
    fill(c);
    rect(-25, -25, 50, 50);
  pop();
  
  
  
  angle %= TWO_PI;
  angle += 0.3;
  
  phaseScale %= TWO_PI;
  phaseScale += 0.1;
  
  phaseColor %= 360;
  phaseColor += 0.5;
  
}

function mouseClicked() {
  clear();
  background(0);
}

