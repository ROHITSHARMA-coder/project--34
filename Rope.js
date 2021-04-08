class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var posA = this.body.bodyA.position;
        var posB = this.pointB;
        stroke("cyan");
        line(posA.x,posA.y,posB.x,posB.y);
    }
}