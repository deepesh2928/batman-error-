var bruce;
var thunderBolt,thunder;
var raindrop;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    thunder=loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400,700); 

   engine = Engine.create();
   world = engine.world;

   bruce=new Bruce();

   Engine.run(engine);
}

function draw(){
    background(0);

    if(World.frameCount%120===0){
      thunderBolt=createSprite(50,-100,25,25);
      thunderBolt.addAnimation("thunder",thunder);
      thunderBolt.x=random(50,350);
    }
    if(World.frameCount%50===0){
      thunderBolt.destroy();
    }

    // raindrop= new rain();
    // raindrop.display

    //   if (umbrella.displace(raindrop)) {
    //     raindrop.destroy();
    //   }
    //   if (raindrop.y > 400) {
    //     raindrop.x = randomNumber(100, 300);
    //     raindrop.y = 0;
    //   }
    // }

    drawSprites();
} 




