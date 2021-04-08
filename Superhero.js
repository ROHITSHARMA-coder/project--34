class Superhero {
    constructor(x,y,r)
      {
          var options = { 
              //restitution: 0.5,
        density: 1, 
        frictionAir: 0.005
      };
          
          this.r=r;
          this.image=loadImage("Superhero-01.png");
          this.body=Bodies.circle(x, y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
  
      display()
      {
              
              var pos=this.body.position;		
              push()
              translate(pos.x, pos.y-100);
              
             
              
              imageMode(CENTER);
              image(this.image, 0,0,this.r+150, this.r)
              pop()
              
      }
  }
  



















