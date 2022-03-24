//self coded Program //
//created By Rounak Verma//


 const {Engine,World,Bodies,MouseConstraint,Mouse,Constraint} = Matter;
//storing the variables//
var ground;
const boxes=[];
const boxes1=[];
var bird;
var world;
var engine;
var mConstarint;

var slingshot;
var backg;
var background1;
var birdImg;
var boxImg;
var boxImg1;

var log;
var logImg;


//creating function preload//
function preload(){
  backg = loadImage('backg.jpg');
  birdImg=loadImage('bird.jpg');
  boxImg=loadImage('woodenbox.jpg');
  boxImg1=loadImage("woodenbox-1.jpg");
  logImg=loadImage("log.jpeg");
                   
  
  
}
//funtion setup//

function setup() {
const canvas = createCanvas(800, 450);
  
  engine= Engine.create();
  world = engine.world;
  
  
//defining the new objects here!!//
    background1 = new Background1(200,200,100,100);
  
  
   ground= new Ground(width/2,height-10,width,20);
 
  
  //creating the first Set of boxes//
    for(let i = 0; i <3; i++) {
    boxes[i] = new Box(580,100-i*15,60,50);
     
             }
  
  
  
  //creating the second set of boxes//
  
    for(let i = 0; i <3; i++) {
    boxes1[i] = new Box1(480,100-i*15,60,50);
     
             }
  
  
    bird = new Bird(400,400,40);
  
  
    slingshot=new SlingShot(150,350,bird.body);
  
  
  //creating the log//
  log = new Log(600,400,150,20);
  
  
  const mouse = Mouse.create(canvas.elt);
  const options={
    mouse :mouse
  }
  mConstraint = MouseConstraint.create(engine);
  
 //adding it to the world//
  World.add(world,mConstraint);
  
}

//defining the function keypressed//
function keyPressed(){
  if(key==' '){
    World.remove(world,bird.body);
    bird = new Bird(150,300,40 );
    slingShot.attach(bird.body);

  
   }
}



//creating the function of mouse released whichg is a global P5 Event//
function mouseReleased() 
   {
  setTimeout(() => {
    slingshot.fly();
   },
    100);
  
   }

 
function draw() {
   background1.show();
  
  Matter.Engine.update(engine);
  ground.show();
  
  for(let box of boxes){
  box.show();
  }
  
   
  for(let box1 of boxes1){
  box1.show();
  }
   slingshot.show()
  bird.show()
  log.show();

} 



