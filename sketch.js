var a;

function setup() {
  createCanvas(800,400);
 a=createSprite(400, 200, 50, 50);
 
}

function draw() {
  background("purple"); 
  if(keyDown("right")) {
    a.velocityX=4;
  }
  drawSprites();
}