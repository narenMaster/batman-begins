const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella,maxDrops = 500
var drops =[];

function preload(){
    
    var thunder = loadImage("thunder.jpg");

}

function setup(){
   createCanvas(400,500);
   engine = Engine.create();
   world = engine.world;

    umbrella  = new Umbrella(200,480);
    
}

function draw(){
    background("black");

    for(i=0 ; i < maxDrops ; i++){

        drops.push(new Drop(random(0,400),random(0,10)));
    }

    umbrella.display();
    Drop.update();
    Drop.draw();
    
}   

