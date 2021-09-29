let caterpillar = {
  x: 100,
  y: 250,
  segmentSize: 50
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100); // A nice green

  // Our variable x tracks where to draw the next caterpillar piece
  //let x = caterpillar.x;
  //let numSegment = 10;
  //let segmentsDrawn = 0;

//  while (segmentsDrawn < numSegment){
    //ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //x = x + 40;
  //  segmentsDrawn = segmentsDrawn + 1;
  //}
  let x = caterpillar.x;
  let numSegment = 10;

  for (let segmentsDrawn = 0; segmentsDrawn < numSegment; segmentsDrawn++){
  ellipse(x, caterpillar.y, caterpillar.segmentSize);
  x = x + 40;}
}
