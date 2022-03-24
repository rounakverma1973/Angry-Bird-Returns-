//creating a new class called Ground//
//inheriting the properties from the box Class//

class Ground extends Box{
  constructor(x,y,w,h){
     super (x,y,w,h);
    
    //Making this body static (ground)//
    
    this.body.isStatic =true;
  }
  
  //CREATING SHOW FUNCTION IN ORDER TO SOLVE THE PROBLEM OF HALF GROUND//
  show(){
    const pos =this.body.position;
    const angle=this.body.angle;
    push();
    fill("#0AFFFF");
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    rect(0,0,this.w,this.h);
    fill(255);
    pop();
  }
}