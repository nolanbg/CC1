function setup() {
  createCanvas(500,500);

  let hotCelsius = toCelsius(100);
  console.log('100 degrees fahrenheit is ${hotCelsius} degrees celsius.');

  let coldCelsius = toCelsius(10);
  console.log('10 degrees fahrenheit is ${coldCelsius} degrees celsius.');
}


/**
Description of draw()
*/
function draw() {
  background(0);
}
function toCelsius(fahrenheit){
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius
}
