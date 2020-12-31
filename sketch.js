const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world ;



function setup() {
  createCanvas(2000,550);

  engine = Engine.create();
  world = engine.world

  ground = new Ground (500,500,1000,5);
  //right column
  box1 = new Box(800,400,70,70);
  box2 = new Box(800,300,70,70);
  box3 = new Box(800,200,70,70);
  box4 = new Box(800,200,70,70);
  box5 = new Box(800,200,70,70);
  //left column
  box6 = new Box(650,400,70,70);
  box7 = new Box(650,300,70,70);
  box8 = new Box(650,200,70,70);
  box9 = new Box(650,200,70,70);
  box10 = new Box(650,200,70,70);

  

  ball = new Ball(200,300,20,20);
  rope = new Rope(ball.body,{x:400,y:50});
  
}

function draw() {
  background("blue");  

  Engine.update(engine);

  ground.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ball.display();
  rope.display();


 
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX ,y: mouseY });

}