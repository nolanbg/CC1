//I put the image in my assets folder and followed the instructions but it didn't even work on the preview for some reason
let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: (0,0,255)
};

let numStatic = 5000;

function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0, height);
  covid19.vx = covid19.speed;

  noCursor();
}

function draw() {
  background(0);

  // Display static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  // Covid 19 movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
    //increases the speed and size of covid19 each time
    covid19.size = covid19.size + 10
    covid19.speed = covid19.speed + 3
  }
  //Makes covid19 green until the speed of 10 is achieved
  if (covid19.speed<10) {
    covid19.fill.r = 0
    covid19.fill.g = 255
  }
  else {
    covid19.fill.r = 255
    covid19.fill.g = 20
  }
  // User movement
  //makes movement dependent on mouse position only if the mouse is held
  if (mouseIsPressed) {
  user.x = mouseX;
  user.y = mouseY;
}
  // Check for catching covid19
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < covid19.size / 2 + user.size / 2) {
    noLoop();
  }

  // Display covid 19
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  ellipse(covid19.x, covid19.y, covid19.size);

  // Display user
  fill(0,0,255);
  ellipse(user.x, user.y, user.size);
}
