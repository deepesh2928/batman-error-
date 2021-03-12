class rain {
    constructor(){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.1
        }
        this.body = Matter.Bodies.circle(random(10,390),0,10,options);
        World.add(world, this.body);
        this.image = loadImage("images/0.png");
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
};