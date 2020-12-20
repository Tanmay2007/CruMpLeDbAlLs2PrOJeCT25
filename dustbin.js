class Dustbin {
    constructor(x, y, width, height) {
      var options = {

          isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.2

      }
    
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image =loadImage("dustbin.png")
      
      World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        angleMode(RADIANS)
       // strokeWeight(5);
        stroke("black");
        fill(255);
        rect (0, 0, this.width, this.height)
        pop();


    }
  }