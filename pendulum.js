class Pendulum {
    constructor (x,y,color){
   
     var options = {
         restitution : 1,
         friction : 0,
         frictionAir: 0.0,
         slop: 1,
         inertia: Infinity
     }
  
  
     this.body = Bodies.rectangle(x,y,40,40,options);
     this.x = x;
     this.y = y;
     World.add(world,this.body)
  
  
    }
  
  display () {
  var pos = this.body.position
  var angle = this.body.angle
  push()
      translate(pos.x,pos.y)
      rotate(angle)
      strokeWeight ("4")
      stroke ("white")
      fill ("black")
      ellipseMode(RADIUS);
      ellipse(0, 0 ,34,34)
    pop();
      
  }
  }