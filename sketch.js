const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload(){
    bg = loadImage("background1.jpg");
}


function setup(){
    var canvas = createCanvas(1300,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(650,750,1300,50);
   
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);

    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(600,100,70,70);
    box20 = new Box(600,100,70,70);

    ball = new Ball(200,200,150,150);
    slingshot = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
    
        background(bg);
    
       
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
  
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();


    ball.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 //   }
}





