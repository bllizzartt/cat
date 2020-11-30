function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220,0,200);
  
catEyesX = map(mouseX, 0, width, -5, 5, 1);
catEyesY = map(mouseY, 0, height, -5, 5, 1);
  
  
// info for cat's head and ears
fill(220, 176, 29)
ellipse(200,200,100,100,100)
triangle(150, 190, 150, 140, 200, 150);
triangle(250, 190, 250, 140, 200, 150);

//info for cat's mouth
fill(1);  
ellipse(200, 230, 50, 20);

//info for cats left/right eye
fill(255, 255, 255);  
ellipse(175, 190, 20, 20);
ellipse(225, 190, 20, 20);


//info for cat's right eye

fill(1)  
ellipse(175 , 190, 10, 10);
ellipse(225, 190, 10, 10);
  

  

}

