var car;
var wall;
var weight;
var speed;
var Deformation;

function setup() {
  createCanvas(1800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 50, height/2);
  speed=random(50,90); 
  weight=random(800,2000);
}

function draw() {
  background(0,255,255);
  car.shapeColor = rgb(255,0,255);
  wall.shapeColor = rgb(255,0,255);
  if(keyDown("space")){
    car.velocityX = speed;
  }
    
  if(wall.x - car.x <(car.width + wall.width)/2) {
    car.velocityX= 0;
    Deformation = 0.5*weight*speed*speed/2250 ;
  }
  if(Deformation > 180){
    car.shapeColor = rgb(255,0,0);
    wall.shapeColor = rgb(255,0,0);
  }
  if(Deformation > 100 && Deformation < 180){
    car.shapeColor = rgb(230,230,0);
    wall.shapeColor = rgb(230,230,0);
  }
  if(Deformation < 100){
    car.shapeColor = rgb(0,255,0);
    wall.shapeColor = rgb(0,255,0);
  }
  drawSprites();
}

