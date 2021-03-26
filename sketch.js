//MA'AM WHERE TO & HOW TO loop , play , pause , stop THE BG-MUSIC
// WE'LL HAVE to add buttons: play,pause,menu,resume,restart buttons etc;
//I have collected game review from my friends
var gameState = "start"
var count = 0;
var b5,pot,treasureChest,man,monster;
//130-370
function preload(){
  b5=loadImage("bg/scratchbg.png")
  cactus1=loadImage("objects/cactus_01.png")
  cactus2=loadImage("objects/cactus_02.png")
  cactus3=loadImage("objects/cactus_03.png")
  cactus4=loadImage("objects/cactus_04.png")
  cactus5=loadImage("objects/cactus_05.png")
  cactus6=loadImage("objects/cactus_06.png")
  cactus7=loadImage("objects/cactus_07.png")
  cactus8=loadImage("objects/cactus_08.png")
  cactus9=loadImage("objects/cactus_09.png")
  flower1=loadImage("objects/flower1.png")
  flower2=loadImage("objects/flower2.png")
  flower3=loadImage("objects/flower3.png")
  flower4=loadImage("objects/flower4.png")
  flower5=loadImage("objects/flower5.png")
  gem1=loadImage("objects/gem1.png")
  gem2=loadImage("objects/gem2.png")
  gem3=loadImage("objects/gem3.png")
  gem4=loadImage("objects/gem4.png")
  gem5=loadImage("objects/gem5.png")
  gem6=loadImage("objects/gem6.png")
  gem7=loadImage("objects/gem7.png")
  gem8=loadImage("objects/gem8.png")
  chest1=loadImage("buttons/b1.png")
  chest2=loadImage("buttons/b2.png")
  chest3=loadImage("buttons/b3.png")
  chest4=loadImage("buttons/b4.png")
  manImg=loadAnimation("man1.png","man2.png")
  monsterImg=loadAnimation("monster1.png","monster2.png")
  bgMusic=loadSound("sound/darkJungleBg.mp3")
  gemSound=loadSound("sound/gemSound.mp3")
  chestSound=loadSound("sound/treasureChest.mp3")
  scoreSound=loadSound("sound/woohoo.mp3")
  bonusMeter=loadSound("sound/scoreBlast.mp3")
  dieSound=loadSound("sound/gruntJumpLand.mp3")
  fallSound=loadSound("sound/scream.mp3")
  potImg=loadImage("buttons/pot1.png")
  mainBg=loadImage("bg/bg1.png")
}
function setup(){
 createCanvas(500,600)
 bg=createSprite(250,300)
 // bg.velocityY=-3
 bg.addImage(b5)
 bg.velocityY=5;
 bg.scale=1.5
 //bg.visible= false
 man=createSprite(250,300)
 man.addAnimation("background",manImg)
 man.setCollider("rectangle",0,0,70,200)
 //man.debug=true
 man.scale=1.1
 
 monster=createSprite(250,500)
 monster.addAnimation("background",monsterImg)
 monster.scale=1.7
 bg1=createSprite(250,300)
 pot=createSprite(250,320)

  cactusGroup= new Group()
  flowersGroup= new Group()
  gemsGroup=new Group()
  chestboxGroup=new Group()
  bgMusic.play();
}

function draw(){
 
  background("pink") 
    if(gameState==="start"){
      pot.addImage(potImg)
      pot.visible=true
      bg1.addImage(mainBg)
      bg1.scale=2.5
       
       if (mousePressedOver(pot)) {
         gameState="play"
         pot.visible=false
       }
       man.visible=false
       monster.visible=false
       count.visible=false
       bg.visible=false
    }
  if(gameState==="play"){
    man.visible=true
    monster.visible=true
    count.visible=true
    bg.visible=true
    bg1.visible=false
  
      if(bg.y>600){
      bg.y=  0;
      }
     if (keyDown(RIGHT_ARROW)) {
      man.x=man.x+5
     }
    if (keyDown(LEFT_ARROW)) {
    man.x=man.x-5
    }
     if (gemsGroup.isTouching(man)){
      gemsGroup.destroyEach();
      gemSound.play();
      count=count+30
    }
     if(chestboxGroup.isTouching(man)){
       chestboxGroup.destroyEach();
       chestSound.play()
       count=count+100
     }
        spawnPlants();
        spawnFlowers();
        spawnGems();
        spawnChests();
      if(cactusGroup.isTouching(man)||flowersGroup.isTouching(man)){
      cactusGroup.destroyEach();
      dieSound.play();
      gameState="end"
      bgMusic.pause();
      }
    
  }
  else if(gameState==="end"){
    bgMusic.pause();
     bg.velocityY=0
     cactusGroup.setVelocityYEach(0)
     flowersGroup.setVelocityYEach(0)
     chestboxGroup.setVelocityYEach(0)
     gemsGroup.setVelocityYEach(0)
     man.destroy()
     monster.destroy()
  }
  drawSprites();
  textSize(30);
  textFont("Georgia")
  textStyle(BOLD)
  fill("red")
  text("Score:"+count,350,70)
}
function spawnPlants(){
  if (frameCount%170===0) {
    cactus = createSprite(250, 0);
    cactus.velocityY=4
    var rand = Math.round(random(1,9))
    switch (rand) {
      case 1: cactus.addImage(cactus1)   
        break;
      case 2: cactus.addImage(cactus2)   
        break;
      case 3: cactus.addImage(cactus3)   
        break;
      case 4: cactus.addImage(cactus4)   
        break;
      case 5: cactus.addImage(cactus5)   
        break;
      case 6: cactus.addImage(cactus6)   
        break;
      case 7: cactus.addImage(cactus7)   
        break;
      case 8: cactus.addImage(cactus8)   
        break;
       case 9: cactus.addImage(cactus9)   
        break;
      default: break;
    }
   cactus.x=Math.round(random(200,300))
    cactus.lifetime=80
 //   cactus.debug = true;
    cactus.scale = 0.4
    cactusGroup.add(cactus)
  }
}
function spawnFlowers(){
  if (frameCount%890===0) {
    flora=createSprite(250,0)
    flora.velocityY=5
    
    var rand = Math.round(random(1,5))
    switch (rand) {
      case 1: flora.addImage(flower1)   
        break;
      case 2: flora.addImage(flower2)   
        break;
      case 3: flora.addImage(flower3)   
        break;
      case 4: flora.addImage(flower4)   
        break;
      case 5: flora.addImage(flower5)   
        break;
      default:  break;
    }
    flora.x=Math.round(random(200,300))
    flora.lifetime=80
  //  flora.debug=true;
    flora.scale=0.3
    flowersGroup.add(flora)
  }
}
function spawnGems(){
  if (frameCount%590===0) {
    gemy=createSprite(220,0)
    gemy.velocityY=4
 
    var rand = Math.round(random(1,8))
    switch (rand) {
      case 1: gemy.addImage(gem1)
        break;
      case 2: gemy.addImage(gem2)
        break;
      case 3: gemy.addImage(gem3)
        break;
      case 4: gemy.addImage(gem4)
        break;
      case 5: gemy.addImage(gem5)
        break;
       case 6: gemy.addImage(gem6)
        break;
      case 7: gemy.addImage(gem7)
        break;
        case 8: gemy.addImage(gem8)
        break; 
      default: break;
    }
    gemy.x=Math.round(random(200,300))
    gemy.lifetime = 80
    gemy.scale=0.2
    gemsGroup.add(gemy)
  }
}
function spawnChests() {
  if (frameCount%1280===0) {
    chesty=createSprite(220,0)
    chesty.velocityY=5

    var rand = Math.round(random(1,4))
    switch (rand) {
      case 1: chesty.addImage(chest1)   
        break;
      case 2: chesty.addImage(chest2)   
        break;
      case 3: chesty.addImage(chest3)   
        break;
      case 4: chesty.addImage(chest4)   
        break;
      default:  break;
    }
    chesty.x=Math.round(random(200,300))
    chesty.lifetime=80
    chesty.scale=0.5
    chestboxGroup.add(chesty)
  }
}