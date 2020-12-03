   var car, weight,speed,wall;
   var car1;
   function setup() {
    
    createCanvas(1600,400);
  
    car=createSprite(50,200,50,50);
    car.shapeColor="blue";

    wall=createSprite(1500,200,60,height/2);
    wall.shapeColor="orange";

    speed=random(55,90);
    car1=createSprite(200,200,20,20);
    weight=random(400,1500);

}

function draw() {
  background("black"); 
  
  car.velocityX=speed;

  

  if(wall.x-car.x<(wall.width+car.width)/2)
  {
      
     car.velocityX=0;
     var deformation=0.5*weight*speed*speed/22509;
     if(deformation<100)
     {
       car.shapeColor="green";
     } 
     if(deformation<180 && deformation>100){
       car.shapeColor="yellow";
     }
     if(deformation>180)
     {
       car.shapeColor="red";   
     }

  }


  drawSprites();
}