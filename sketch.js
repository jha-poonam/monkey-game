
var monkey , monkey_running, ground;
var banana ,bananaImage, stone, obstacleImage
var foodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,250,30,50);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(600,310,400,20);
  //ground.addImage("ground",)
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;

  
}


function draw() {
  background("white");
  
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("survival time: "+score,300,100);
  
  if(ground.x<0){
    ground.x = ground.width/2;
        }
  
 // console.log(monkey.y)
  
  if(keyDown("space")){
    monkey.velocityY = -6;
  }
  
  monkey.velocityY = monkey.velocityY + 0.3;
  
   monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
}

function food(){
  if(frameCount % 100 === 0){
    banana = createSprite(600,140,20,10);
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(100,150));            
    banana.velocityX=-3;
    banana.lifetime=200;
    foodGroup.add(banana);
    
  }
  
}

function obstacle(){
  if(frameCount % 300 === 0){
    stone = createSprite(600,280,50,60);
    stone.addImage("obstacle",obstacleImage);
    stone.scale=0.2;
    stone.velocityX=-4;
    stone.lifetime=210;
    obstacleGroup.add(stone); 
    
  }
  
}



