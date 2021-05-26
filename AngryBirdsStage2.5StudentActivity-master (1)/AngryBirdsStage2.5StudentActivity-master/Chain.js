class Chain 
{
    constructor(bodyA , bodyB)
    {
        var bean = 
        {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness: 0.04
        }

        this.chain = Constraint.create(bean);
        World.add(world, this.chain);
        
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(6);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}