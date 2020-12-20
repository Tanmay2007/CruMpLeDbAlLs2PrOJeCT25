
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinimg;
var ground,side1,side2,side3,paperObject,ground;



function setup() {
	createCanvas(800, 700);

	
	

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(100,675,115)
	
side1=new Dustbin(620,620,10,145)
side2=new Dustbin(690,680,150,10)
side3=new Dustbin(770,620,10,145)

ground= new Ground(400,690,800,10)

	Engine.run(engine);
  
}
function preload(){
dustbinimg=loadImage("dustbin.png")

}

function draw() {
  rectMode(CENTER);
  background("yellow");

  
 
 
  side1.display()
  side2.display()
  side3.display()
  ground.display()
  paperObject.display();

	image(dustbinimg,618,538,155,140);
  drawSprites();
 
}

function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:400,y:-900})

}
}