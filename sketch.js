const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var drops = [];
var maxDrops = 100;
var thunderImage1, thunderImage2, thunderImage3, thunderImage4;

function preload(){
    thunderImage1 = loadImage("images/light_1.png");
    thunderImage2 = loadImage("images/light_2.png");
    thunderImage3 = loadImage("images/light_3.png");
    thunderImage4 = loadImage("images/light_4.png");    
}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(width/2,height/2);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,350)));
    }
   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    if (frameCount%100===0){
        createThunder();
    }

    umbrella.display();

    for (var i=0; i<drops.length; i++){
        drops[i].display();
        drops[i].update();
    }
    
    drawSprites();
}   

function createThunder(){
    var thunder = createSprite(width/2,100);
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder.addImage(thunderImage1);
        break;
        case 2: thunder.addImage(thunderImage2);
        break;
        case 3: thunder.addImage(thunderImage3);
        break;
        case 4: thunder.addImage(thunderImage4);
        break;
        default: break;        
    }

    thunder.scale = 0.3;
    thunder.lifetime = 20;
}

