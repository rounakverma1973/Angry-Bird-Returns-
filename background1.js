class Background1
{
  
constructor (x,y,w,h){
   this.body =Matter.Bodies.rectangle(x,y,w,h);
    Matter.World.add(world,this.body);
  }

  
  show(){
    image(backg,0,0,this.w,this.h);
    scale = 0.8;
  
  
  }
  
  

  
  
  
}