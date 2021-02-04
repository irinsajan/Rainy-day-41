class Umbrella{
    constructor(x,y){
        this.body = Bodies.circle(x,y,50,{isStatic:true});
        World.add(world,this.body);
        this.image = loadImage("images/boy.png");
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+140,300,500);
    }
}