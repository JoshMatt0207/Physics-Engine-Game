var background, mario, ground,coin, happyMario, mushroom
var Play=1
var End=0
var gameState=Play


function preload(){
backgroundImg=loadImage("mario-bg.png")
marioImg=loadImage("mario.png")
coinImg=loadImage("coin.png")
happyMarioImg=loadImage("happy_mario.png")
mushroomImg=loadImage("mushroom.png")

}




function setup() {
  createCanvas(1400,700);


  background=createSprite(700,300,2400,1500)
  background.addImage(backgroundImg)
  background.scale=6

  mario=createSprite(100,500,50,50)
  mario.addImage(marioImg)
  mario.scale=.5
  mario.setCollider("rectangle",0,0,200,80)
  mario.debug=true

  ground=createSprite(100,700,2400,100)

  coin=createSprite(2000,300,50,50)
  coin.addImage(coinImg)
  coin.scale=.5

  happyMario=createSprite(700,350,50,50)
  happyMario.addImage(happyMarioImg)
  happyMario.scale=.5
  
  mushroom=createSprite(2500,300,50,50)
  mushroom.addImage(mushroomImg)
  mushroom.scale=.5




  
}

function draw() {

if(gameState===Play){
 
 
  if(background.x<600){
  background.x=700
 }

 background.velocityX=-6

 if(keyDown("Up") && mario.y>=400){
  mario.velocityY=-8
  }

  mario.velocityY=mario.velocityY+.8

  coin.velocityX=-3

  mushroom.velocityX=-3

  ground.visible=false

  happyMario.visible=false

  if(mario.isTouching(coin)){
  coin.visible=false
  }

  if(mario.isTouching(mushroom)){
    mushroom,visible=false
  }


  if(mario.isTouching(coin && mushroom)){
    gameState=End
  }



}



    


if(gameState===End){



background.velocityX=0
mario.velocityX=0

mario.visible=false

happyMario.visible=true


mushroom.visible=true

}




mario.collide(ground)
    
  drawSprites();
}
