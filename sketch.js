const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

var engine; 
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(30, 40, 30);
    ground = new Ground(1000, 900, 400, 20);
    leftSide = new Ground(1000, 900, 400, 20);
	rightSide = new Ground(1000, 900, 400, 20);

    
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  Engine.update(engine);

  ball.show();
  ground.show();
  
  drawSprites();
 
}

function hForce() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); 
   }

