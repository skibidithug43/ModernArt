function setup() {
  createCanvas(500, 400); // w, h
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(5);
  
  fill(3, 145, 158);
  rect(175,190,100,100);//placement by the top left
  
  
  noFill();
  stroke(184, 95, 0);
  strokeWeight(10);
  rect(50,125,400,150); //x,y,width,height
  
  noStroke();
  fill(138, 255, 233, 200)
  ellipse(90,75,150,150); //x,y,width,height, placement from center
  
  strokeWeight(15);
  stroke(85, 95, 173);
  line(0,370,500,60) 
  
  
  strokeWeight(1);
  
 //Mouse coordinate finder: 

fill(255); //mouse coordinate finder

text("("+mouseX+","+mouseY+")", mouseX, mouseY);


 
  
}