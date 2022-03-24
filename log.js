//Creating  a Log Class Constructor//

class Log{
  constructor (x,y,w,h){
    //creating a body in link with the matter .jsThis a function im that library that creates a object rectangular on giving the command //
    this.body =Matter.Bodies.rectangle(x,y,w,h);
    Matter.World.add(world,this.body);
    
    
      this.w=w;
      this.h=h;
   
  }
  //creating a command to show my objects//
  
  show(){
    const pos =this.body.position;
    
    //Giving an angle for the box to be rotated//
    const angle=this.body.angle;
    push();
    fill("#0AFFFF");
    rectMode(CENTER);
    imageMode('CENTER');
    translate(pos.x,pos.y);
    rotate(angle);
    image(logImg,0,0,this.w,this.h);
    fill(255);
    pop();
  }
  
  
}