/**
exercise 1
Nolan Barton-Gomez
*/

"use strict";


/**
variable declaration
*/
function preload() {

}
let circleX = 250;
let circleY = 250;
let circleSize = 100;
let circleSpeed = 1
/**
creates Canvas
*/
function setup() {
createCanvas(500,500);
}


/**
Shape movement and colour change setup()
*/
function draw() {
  // Make the background colour dependent on mouse position
  background(mouseX,mouseY,0);
  // Creates 2 rectangles. One of them changes size depending on the mouse
  //The other changes position in accordance with the mouse
  rectMode(CENTER);
  rect(mouseX,mouseY,100,100);
  rectMode(CENTER);
  rect(100,100,mouseX,mouseY)
  ellipse(circleX, circleY, circleSize);
  circleX = circleX + circleSpeed; // Move the circle
  circleX = constrain(circleX, 0, width); // Constrain the circle's x position within 0-width
}
