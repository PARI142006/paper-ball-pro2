
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {  
	createCanvas(1500, 500);

	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	
	ground = new Ground(600,height,1500,20)
	ball = new Paper(300,329,70,70);
	Engine.run(engine);
	dustbin1 =new Ground(900,440,20,100)
	dustbin2 =new Ground(1100,440,20,100)
	dustbin3 =new Dustbin(1007,410,200,20)
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:175,y:-295})
  
  
  
	}
}


