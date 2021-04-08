class Monster {
    constructor(x,y,width,height)
      {
          var options = { 

        density: 1, 
        frictionAir: 0.005
      };
          
          this.width=width;
          this.height=height;

          this.image=loadImage("Monster-01.png");
          this.body=Bodies.rectangle(x, y,width,height, options)
          World.add(world, this.body);
  
      }
  
      display()
      {
              
              var pos=this.body.position;		
              push()
              translate(pos.x, pos.y-100);
              
             
              
              imageMode(CENTER);
              image(this.image, 0,0,this.width+150, this.height)
              pop()
              
      }
  }
  



















