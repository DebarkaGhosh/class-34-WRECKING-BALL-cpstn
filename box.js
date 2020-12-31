class Box{
    constructor(x,y,w,h){

        var options = {
          'restitution' : 1,
          'friction': 1.5,
          'density':0.9,
          isStatic :false
          
          
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w 
        this.height = h
         World.add(world,this.body)

    }

    display(){

        var pos = this.body.position ;
        console.log(pos);
        var angle = this.body.angle;

        push()
        translate(pos.x , pos.y);
        rotate(angle);
        strokeWeight(2.5);
        stroke("black");         
        rectMode(CENTER)
        fill("yellow");
        rect(0 ,0, this.width,this.height);
        pop()

    }

}