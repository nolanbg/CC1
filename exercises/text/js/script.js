let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
}

let titleString = "Life: A Metaphor";
let endingString = "Ah, mortality.";

let state = `title`;

function setup() {
  createCanvas(500, 500);
  circle.vx = circle.speed;

  // Text settings
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `animation`) {
    animation();
  }
  else if (state === `ending`) {
    ending();
  }
}

function title() {
  fill(255);
  text(titleString, width / 2, height / 2);
}

function animation() {
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x, circle.y, circle.size);

  if (circle.x > width) {
    state = `ending`;
  }
}

function ending() {
  fill(255, 0, 0);
  text(endingString, width / 2, height / 2)
}

function keyPressed() {
  if (state === `title`) {
    state = `animation`;
  }
}
