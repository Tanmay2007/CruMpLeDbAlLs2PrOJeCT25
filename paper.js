class paper {

    constructor (x,y,r)
    
    {
    
    var options = {
    
  
    restitution:0.2,
    friction:2,
     density:1.2
    
    }
     this.x= x;
    
    this.y =y;
    
    this.r =r
    
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
     World.add(world, this.body);
    this.image=loadImage("paper.png")
  
    } 
    display()
    
    {

    var paperpos=this.body.position;
    
    push()
    translate(paperpos.x, paperpos.y);
     rectMode(CENTER)
    strokeWeight(0);
    fill("grey")
    image(this.image,0,0,50,70)
    
    pop()
    }
}
