var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(265,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3=createSprite(695,580,200,30);
    block3.shapeColor = "yellow";
    
    block4=createSprite(495,580,200,30);
    block4.shapeColor = "pink";
    
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=2;
    ball.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
   if(block1.y-ball.y<block1.height/2+ball.height/2&&ball.height/2-block1.height/2<block1.height/2+ball.height/2&&ball.bounceOff(block1)){
     ball.shapeColor="blue";
     ball.velocityY=(-1)*ball.velocityY;
     return true;
    
  }
  else
  {return false};

  if(block2.y-ball.y<block2.height/2+ball.height/2&&ball.height/2-block2.height/2<block2.height/2+ball.height/2&&ball.bounceOff(block2)){
    ball.shapeColor="orange";
    ball.velocityY=0;
    ball.velocityX=0;
    return true;
   
   
 }
 else{return false; }
 
 
   
  if(block3.y-ball.y<block3.height/2+ball.height/2&&ball.height/2-block3.height/2<block3.height/2+ball.height/2&&ball.bounceOff(block3)){
    ball.shapeColor="yellow";
    ball.velocityY=(-1)*ball.velocityY;
    return true;
   
   
 }
 else{return false; }
 if(block4.y-ball.y<block4.height/2+ball.height/2&&ball.height/2-block4.height/2<block4.height/2+ball.height/2&&ball.bounceOff(block4)){
    ball.shapeColor="pink";
    ball.velocityY=(-1)*ball.velocityY;
    return true;
   
   
 }
 else{return false;
 }
 



    drawSprites();
}










    
       
 
 
      
       
 
      
       
    
    