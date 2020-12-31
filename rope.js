class Rope{

    constructor(bodyA , pointB){
        var options = {
     
              bodyA:bodyA,
              pointB:pointB,

              stiffness:0.9,
              length : 300
            }

            this.pointB = pointB
            this.rope = Constraint.create(options);
            World.add(world,this.rope);

    }

    display(){

       line(this.rope.bodyA.position.x , this.rope.bodyA.position.y, this.pointB.x,this.pointB.y);
    }
}