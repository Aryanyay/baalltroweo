
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground = new Ground(200,390,400,20);
	left = new Ground(10,200,20,400);
	right = new Ground(390,200,20,400);
	top_wall = new Ground(200,10,400,20);
  



    ball = Bodies.circle(200,100,20,ballOptions);
    World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);


	Engine.run(engine);

	var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:0.2,
	}
  
}


function draw() {


	ellipse(ball.position.x,ball.position.y,20);

	ground.show();
	left.show();
	right.show();
	top_wall.show() 




  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



