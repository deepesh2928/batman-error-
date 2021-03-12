class Bruce {
    constructor(){
        var options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':1.0,
            'density':1.1
        }
        this.body = Matter.Bodies.circle(200,650,10,options);
        World.add(world, this.body);
        this.image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,100,100);
    }
};