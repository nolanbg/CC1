let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 10
};

let state = `title`; // Can be: title, simulation, love, sadness

function setup() {
  createCanvas(windowWidth,windowHeight);
  setupCircles();
}

function setupCircles() {
  // Position circles separated from one another
  circle1.x = 3 * width / 4;
  circle2.x = width / 4;

  // Start circles moving in a random direction
  circle1.vx = random(-circle1.speed,circle1.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);
  circle2.vx = random(0,circle2.speed);
  circle2.vy = random(0,0);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`) {
    sadness();
  }
}
//makes the second circle jitter back and forth
  function teleport(){
    if (circle2.x > windowWidth/2){
      circle2.y = circle2.y + random(-20,20);
    }
  }
function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
  teleport();
  circlePassed();
}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`LOVE!`,width/2,height/2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`:(`,width/2,height/2);
  pop();
}
function escape() {
  push();
  textSize(64);
  fill(0,150,0);
  textAlign(CENTER,CENTER);
  text(`You let them go:/`,width/2,height/2);
  pop();
}
function move() {
  // Move the circles
  circle1.x = 3*width/4;
  circle1.y = mouseY;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y;
}
//if the automated circle passed the user, the escape function is activated
function circlePassed(){
  if (circle2.x > circle1.x){
    state  = `escape`;
  }
}
function checkOffscreen() {
  // Check if the circles have gone offscreen
  if (isOffscreen(circle1) || isOffscreen(circle2)) {
    state = `sadness`;
  }
}

function isOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  }
  else {
    return false;
  }
}

function checkOverlap() {
  // Check if the circles overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
  }
}

function display() {
  // Display the circles
  ellipse(circle1.x,circle1.y,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
