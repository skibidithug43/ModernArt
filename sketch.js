/*
Braiden S
8/26/24
*/

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0,0,0);
  
  fill(0);
  rect(200,200,200,200);
  
  fill(0);
  rect(125,125, 150,150);
  
  fill(0);
  ellipse(200,200,50,50);
}

function draw() {
  background(155);
  
  fill(0);
  rect(50,100,150,150);
  
  fill(100);
  rect(250,250,50,50);
  
  fill(255);
  rect(100,300,200,200);
  
  circle(50, 50, 50);
  
    // Style the line.
  stroke('red');
  strokeWeight(3);

  line(30, 20, 85, 75);
  
  line(0,299,500,299)
  line(300,500,300,0)
  line(0,250,500,250)
  
  fill(0); //mouse coordinate finder

text("("+mouseX+","+mouseY+")", mouseX, mouseY);
}
