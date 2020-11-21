const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine , world ,box_2, box_1, ground,ball1,ball2, rope ;

var mConstraint;

function setup() {
  var canvas = createCanvas(windowWidth/2,windowHeight/1.5);

  

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let option = {
    mouse : canvasmouse
  }
  
  mConstraint = MouseConstraint.create(engine, option);
  World.add(world,mConstraint);


  ball1 = new Ball(150,200,60);
  ball2 = new Ball(210,200,60);
  ball3 = new Ball(270,200,60);
  ball4 = new Ball(340,200,60);
  ball5 = new Ball(400,200,60);
  rope1 = new Rope(ball1.body, {x:150, y:50})
  rope2 = new Rope(ball2.body, {x:210, y:50})
  rope3 = new Rope(ball3.body, {x:270, y:50})
  rope4 = new Rope(ball4.body, {x:340, y:50})
  rope5 = new Rope(ball5.body, {x:400, y:50})

  ground = new Ground(500,600,1000,20);










  

  
  
}

function draw() {
  background("black");
  Engine.update(engine);
 
  

  ground.displayground();
  ball1.displayball();
  ball2.displayball();
  ball3.displayball();
  ball4.displayball();
  ball5.displayball();
  rope1.displayrope();
  rope2.displayrope();
  rope3.displayrope();
  rope4.displayrope();
  rope5.displayrope();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}
