
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(670,400);
  score=0;
  survivalTime=0;
  
  ground = createSprite(0,400,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  monkey = createSprite(50,370,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group ();
  
  score=0;

  
}


function draw() {
  background(255);
  
  fill("black") ;
  text("Score: "+ score, 500,50);
  
  
    if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ground);
  
  
  ground.velocityX = -7; 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits();
 }
  
  if(World.frameCount%300===0){
    stones();
 }
  
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
    score=score+1;
      }
  
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    monkey.velocityX=0;
    score=0;
  }

  drawSprites();
  
  fill("black");
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50);

}


function fruits(){
  if(frameCount % 80 === 0){
  banana=createSprite(670,Math.round(random(120,200)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
  } 
}

function stones(){
  if(frameCount % 300 === 0){
  obstacle=createSprite(670,380,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
  }
}



