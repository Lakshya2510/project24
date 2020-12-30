
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper, dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(650,10,width,10)
	paper = new Paper(85,-85,20)
	dustbin1 = new Dustbin(550,600,100,10)
	dustbin2 = new Dustbin(500,600,10,50)
	dustbin3 = new Dustbin(600,600,10,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85, y:-85})
	 }
   }


