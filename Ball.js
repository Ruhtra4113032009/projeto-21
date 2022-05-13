class Ball{
    constructor(x,y,r){
        
        var options = {
            restitution: 0.8,
            isStatic:false,
            friction:0,
            density:1.2,
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    show(){

        var pos = this.body.position;
        ellipse(pos.x,pos.y,this.r);
    }
}