var car ,wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  
  // creating a sprite for wall
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColour = color(80,80,80);

  // setting random values for speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  // creating a sprite for car
  car = createSprite(150, 800, 50, 50);
  car.velocityX = speed;
}

function draw() {
  // setting the background as black
  background(0);  

  // detecting the collision of the wall and the car
if(wall.x-car.x<(car.width+wall.width/2)){
  // stopping the car after collision
  car.velocityX = 0;

// introducing a local variable deformation
  var deformation = 0.5*weight*speed*speed/22509;

  // giving shape colour of car red when deformation is more
  if(deformation > 180){
    car.shapeColour = color(225,0,0);
  }

  // giving the shape colour of car as yellow when deformation is average
  if(deformation<180 && deformation>100){
    car.shapeColour = color(230,230,0);
  }

  // giving the shape colour of car as green when deformation is normal
  if(deformation<100){
    car.shapeColour = color(0,225,0);
  }
}

drawSprites();
}