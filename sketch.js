//adding matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//object variables
var ground;
var dbin,lbin,rbin;
var paperb;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
 
//making world
	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
	ground = new Ground(600,700,1200,50);
	dbin = new Bin(900,675,150,5);
	lbin = new Bin(825,625,5,100);
	rbin = new Bin(975,625,5,100);
	paperb = new Paper(300,350,20);
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
  //displaying objects
  ground.display();
  dbin.display();
  lbin.display();
  rbin.display();
  paperb.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		
	   Matter.Body.applyForce(paper.Body,paper.Body.position,{x:-200,y:-200});
		
	}
}




