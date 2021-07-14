class Ball{

    constructor(x,y,radius){
    
     var options={
         isStatic:false,
        restitution:1,
        friction:1,
        density:1    
    }
    this.radius=radius;
    this.body=Bodies.circle(x,y,this.radius/2,options);
   
  
    World.add(world,this.body);
    
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black")
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
    }
