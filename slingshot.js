//creating a slingshot class//
class SlingShot{
  
  constructor(x,y,body){
    
    const options = {
      
      pointA:{
        
        x:x,
        y:y
     },
       bodyB :body,
      stiffness:0.04,
      length:20
    }
    
    this.sling=Constraint.create(options);
    World.add(world,this.sling)
  }
  
  
  //Giving a fly function//
  fly(){
    
    this.sling.bodyB=null;
  }
  
  
  
  
  
  
  //Making A show function//
  show(){
    
    //filling the stroke color as black //
    //this is the color code for black color//
    if(this.sling.bodyB){
    stroke("#000000");
    const posA = this.sling.pointA;
    const posB = this.sling.bodyB.position;
    line(posA.x,posA.y,posB.x,posB.y);
  }
  }
  attach(body){
    this.sling.bodyB = body;
  }
}