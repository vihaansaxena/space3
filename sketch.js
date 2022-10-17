// Declare variables here
var input
var button,score=0;
var spaceImg,space
var hr,sc,mn;
var gameState=1
var edges;
var title,alienship1,alienship1Img
var barrier,bullet,spaceShuttle,spaceShuttleImg;
var bullet_enemy;
var alienship1Grp, bulletGrp;
var heart1,heart2,heart3;
var heartImg;
var laser,laserImg;
var boss,bossImg;
var bulletGrpEnemy;
var backSound;
var hearts=5;
var bosslife=100
var gameOver,gameOverImg,award,awardImg;
var restartButton;
var explosionSound;
var flag = 0;

function preload(){
   spaceImg=loadImage("Infinite space.jpg") 
   alienship1Img=loadImage("Alien Spaceship 1.png")
   spaceShuttleImg=loadImage("spaceShuttle.png")
   explosion = loadAnimation("1.png","2.png","3.png","4.png","5.png");
  heartImg=loadImage("heart.png")
   myBulletImg=loadImage("myBullet.png")
 enemyBulletImg=loadImage("enemyBullet.png")
gameOverImg=loadImage("gameOver.png")
backSound=loadSound("yt1s.com - 20 second Royalty free intro music upbeat.mp4")
  explosionSound=loadSound("explosion sound effects.mp4")
  bossImg=loadImage("boss.png")
}
function setup(){
    background('red')
    createCanvas(1000,650);
    space=createSprite(200,200)
    space.addImage(spaceImg)
    space.scale=2
    console.log(space.scale)
    space.velocityY=2;
            
   boss=createSprite(450,100);
   boss.addImage(bossImg)
    boss.depth=space.depth+1
    boss.scale=0.7;
    boss.visible = false
   
    spaceShuttle=createSprite(190,550)
    spaceShuttle.addImage(spaceShuttleImg)
    spaceShuttle.scale=0.6;
    spaceShuttle.visible = false;
    spaceShuttle.setVelocity(0,0)

    heart1=createSprite(40,125);
    heart1.addImage(heartImg);
    heart1.scale=0.1;

    heart2=createSprite(90,125);
    heart2.addImage(heartImg);
    heart2.scale=0.1;

    heart3=createSprite(140,125);
    heart3.addImage(heartImg);
    heart3.scale=0.1;

    heart4=createSprite(190,125);
    heart4.addImage(heartImg);
    heart4.scale=0.1;
   
    heart5=createSprite(240,125);
    heart5.addImage(heartImg);
    heart5.scale=0.1;

    edges = createEdgeSprites();
    bulletGrpEnemy= new Group();
    alienship1Grp = new Group();
    alienship2Grp = new Group();
    alienship3Grp = new Group();
    bulletGrp = new Group();
  
}

function draw (){
    background("white");
     
    if(gameState===1){
        spaceShuttle.visible = true;
        spaceShuttle.bounceOff(edges);
        spaceship1();
        if(bulletGrpEnemy.isTouching(spaceShuttle)){
            explosionSound.play();
            hearts=hearts-1;
           ignition= createSprite(spaceShuttle.x,spaceShuttle.y+20)
            ignition.addAnimation("burning",explosion)
             ignition.scale=0.8;
            ignition.lifetime=20;
            bulletGrpEnemy.destroyEach();
            switch (hearts){
                case 4: heart5.visible = false;
                break ;
                case 3: heart4.visible = false;
                break;
                case 2: heart3.visible = false;
                break ;
                case 1: heart2.visible = false;
                break ;
                
            }
        } 
        if (hearts === 0){
            gameState = 0;
        }
        if(score==10){
            gameState=2;
            hearts = 5;
            score = 0;
        }
        if(bulletGrp.isTouching(alienship1Grp)){
            explosionSound.play();
            alienship1Grp.destroyEach();
            ignition= createSprite(alienship1.x,alienship1.y)
            ignition.addAnimation("burning",explosion)
            ignition.lifetime=50;
            bullet_enemy.destroy();
            bullet.destroy();
            score=score+10;
        }
         
    }
   
    if(gameState===2){
        spaceShuttle.visible = true;
        spaceShuttle.bounceOff(edges);
        space.velocityY=3;
        spaceship2();

        if(bulletGrpEnemy.isTouching(spaceShuttle)){
            explosionSound.play();
            hearts=hearts-1;
           
            ignition= createSprite(spaceShuttle.x,spaceShuttle.y+20)
            ignition.addAnimation("burning",explosion)
            ignition.scale=0.8;
            ignition.lifetime=20;
            bulletGrpEnemy.destroyEach();
            switch (hearts){
                case 4: heart5.visible = false;
                break ;
                case 3: heart4.visible = false;
                break;
                case 2: heart3.visible = false;
                break ;
                case 1: heart2.visible = false;
                break ;
                
            }
        } 
        if (hearts === 0){
            gameState = 0;
        }
        if(score==10){
            gameState=3;
            hearts = 10;
            score = 0;
        }
        if(bulletGrp.isTouching(alienship2Grp)){
            explosionSound.play();
            alienship2Grp.destroyEach();
            ignition= createSprite(alienship2.x,alienship2.y)
            ignition.addAnimation("burning",explosion)
            ignition.lifetime=50;
            bullet_enemy.destroy();
            bullet.destroy();

            score=score+10;
        }
         
    }
    if(gameState===3){
        spaceShuttle.visible = true;
        spaceShuttle.bounceOff(edges);
        space.velocityY=4;
        spaceship3();

        if(bulletGrpEnemy.isTouching(spaceShuttle)){
            explosionSound.play();
            hearts=hearts-1;
           
            ignition= createSprite(spaceShuttle.x,spaceShuttle.y+20)
            ignition.addAnimation("burning",explosion)
            ignition.scale=0.8;
            ignition.lifetime=20;
            bulletGrpEnemy.destroyEach();
            switch (hearts){
                case 8: heart5.visible = false;
                break ;
                case 6: heart4.visible = false;
                break;
                case 4: heart3.visible = false;
                break ;
                case 1: heart2.visible = false;
                break ;
                
            }
        } 
        if (hearts === 0){
            gameState = 0;
        }
        if(score>=20){
            boss.visible = true
            boss.x = spaceShuttle.x;
            boss.bounceOff(edges)
            flag = 1
                bullet_enemy=createSprite(boss.x,boss.y,10,10);
                bullet_enemy.velocityX = random(-20,-5);
                bullet_enemy.velocityY = 40;
                bullet_enemy.addImage(enemyBulletImg);
                bullet_enemy.scale=0.15
                bullet_enemy.lifetime=200;
                bulletGrpEnemy.add(bullet_enemy);
           
        }
        if(bulletGrp.isTouching(alienship3Grp)){
            explosionSound.play();
            alienship3Grp.destroyEach();
            ignition= createSprite(alienship3.x,alienship3.y)
            ignition.addAnimation("burning",explosion)
            ignition.lifetime=50;
            bullet_enemy.destroy();
            bullet.destroy();
            score=score+10;
        }
        if(bulletGrp.isTouching(boss) && flag==1){
            explosionSound.play();
            ignition= createSprite(alienship3.x,alienship3.y)
            ignition.addAnimation("burning",explosion)
            ignition.lifetime=50;
            bullet_enemy.destroy();
            bullet.destroy();
            bosslife-=5;
            score=score+10;
        }
        if(bosslife == 0){
            //win
            gameState=4
            spaceShuttle.destroy();
            alienship3Grp.destroyEach();
            bulletGrpEnemy.destroyEach();
            boss.destroy()
            space.velocityY=0;

     }
         
    }
    if(gameState === 0){
   gameOver=createSprite(width/2,height/2);
   gameOver.addImage(gameOverImg);
   gameOver.scale=1.5
   space.velocityY=0;
   spaceShuttle.destroy();
   alienship1Grp.destroyEach();
   alienship2Grp.destroyEach();
   alienship3Grp.destroyEach();
   bulletGrpEnemy.destroyEach();
    }
    
   
    if(space.y>450){
        space.y=200
       }
   
   
    drawSprites();
    
textSize(20);
fill('red')
  //  text(mouseX+","+mouseY,mouseX,mouseY)
  text("Level :- "+gameState,60,50)
   text("Your Score :- "+score,60,70) 
}

function spaceship1(){
    
        if(gameState===1 && frameCount %100 === 0){
        alienship1=createSprite(random(200,800),random(20,spaceShuttle.y -200));
        alienship1.addImage(alienship1Img)
        alienship1.depth=space.depth+1
        alienship1.scale=0.7;
        alienship1.lifetime = 200;
        alienship1Grp.add(alienship1);
        bullet_enemy=createSprite(alienship1.x,alienship1.y,10,10);
        bullet_enemy.velocityX = random(-20,-5);
        bullet_enemy.velocityY = 20;
        bullet_enemy.addImage(enemyBulletImg);
        bullet_enemy.scale=0.15
        bullet_enemy.lifetime=200;
        bulletGrpEnemy.add(bullet_enemy);
        }

}
function spaceship2(){
    
    if(gameState===2 && frameCount %70 === 0){
    alienship2=createSprite(random(200,800),random(20,spaceShuttle.y -200));
    alienship2.addImage(alienship1Img)
    alienship2.depth=space.depth+1
    alienship2.scale=0.7;
    alienship2.lifetime = 200;
    alienship2Grp.add(alienship2);
    bullet_enemy=createSprite(alienship2.x,alienship2.y,10,10);
    bullet_enemy.velocityX = random(-20,-5);
    bullet_enemy.velocityY = 25;
    bullet_enemy.addImage(enemyBulletImg);
    bullet_enemy.scale=0.15
    bullet_enemy.lifetime=200;
    bulletGrpEnemy.add(bullet_enemy);
     }

}

function spaceship3(){
    
    if(gameState===3 && frameCount %50 === 0){
    alienship3=createSprite(random(200,800),random(20,spaceShuttle.y -200));
    alienship3.addImage(alienship1Img)
    alienship3.depth=space.depth+1
    alienship3.scale=0.7;
    alienship3.lifetime = 200;
    alienship3Grp.add(alienship3);
    bullet_enemy=createSprite(alienship3.x,alienship3.y,10,10);
    bullet_enemy.velocityX = random(-20,-5);
    bullet_enemy.velocityY = 30;
    bullet_enemy.addImage(enemyBulletImg);
    bullet_enemy.scale=0.15
    bullet_enemy.lifetime=200;
    bulletGrpEnemy.add(bullet_enemy);
    }

}
 
function keyPressed(){
    if(keyCode===32 &&gameState!=0 && score!=500){
        bullet=createSprite(spaceShuttle.x,spaceShuttle.y-30)
        bullet.velocityY= -10;
        bullet.scale=0.15;
        bullet.addImage(myBulletImg);
        bullet.lifetime=500;
        bulletGrp.add(bullet);
     
    }
    
    if(spaceShuttle.x>100){
    if(keyCode===LEFT_ARROW&&gameState!=0){
        spaceShuttle.velocityX=-5;
    }
    }   
     
    if(spaceShuttle.x<900){
    if(keyCode===RIGHT_ARROW&&gameState!=0){
        spaceShuttle.velocityX= 5;
    }
    }
  
    }