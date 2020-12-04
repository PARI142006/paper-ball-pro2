class Dustbin{
    constructor(x, y, width, height) {
      var options = {
          
          'isStatic': true,
          'density': 1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("magenta");
      image(this.image,0, 0,209, this.width, this.height);
      pop();
    }
  };
  