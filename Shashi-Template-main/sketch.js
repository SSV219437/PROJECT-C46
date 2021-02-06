var gameState;
var button;
var laser1;
var laser2;
var laser3;

var laser4,laser5,laser6,laser7;


var laser1group;

var spy;

var edges;

var gem;

var reset;

function preload(){}













function setup(){
createCanvas(1530,750);
gameState = "homePage";

edges = createEdgeSprites();

gem = createSprite(765,65,40,40);
gem.shapeColor = "blue";
gem.visible = false;


button = createSprite(600,250,50,50);
button.shapeColor = "black";
button.visible = false;

reset = createSprite(765,375,30,30);
reset.shapeColor = "black"
reset.visible = false;


laser1 = createSprite(100,150,200,10)
laser1.shapeColor="black"
laser1.visible = false
laser1.velocityX = 20


laser2 = createSprite(1425,375,200,10)
laser2.shapeColor="black"
laser2.visible = false
laser2.velocityX = -20


laser3 = createSprite(100,650,200,10)
laser3.shapeColor="black"
laser3.visible = false
laser3.velocityX = 20

laser4 = createSprite(100,100,200,10)
laser4.shapeColor="black"
laser4.visible = false
laser4.velocityX = 25


laser5 = createSprite(1475,250,200,10)
laser5.shapeColor="black"
laser5.visible = false
laser5.velocityX = -25


laser6 = createSprite(100,400,200,10)
laser6.shapeColor="black"
laser6.visible = false
laser6.velocityX = 25


laser7 = createSprite(1475,550,200,10)
laser7.shapeColor="black"
laser7.visible = false
laser7.velocityX = -25


lasers_group = new Group();
lasers_group.add(laser1)
lasers_group.add(laser2)
lasers_group.add(laser3)


lasers_group2 = new Group();
lasers_group2.add(laser4)
lasers_group2.add(laser5)
lasers_group2.add(laser6)
lasers_group2.add(laser7)






spy = createSprite(600,765,30,30)
spy.shapeColor="black"
spy.visible = false


}





function draw(){
if (gameState === "homePage") {
    background("GRAY");
    fill("black");
    text("Spy Game",600,100)
    button.visible = true;


    if (mousePressedOver(button)) {
        gameState = "Level_One"
    
    }
}
else if(gameState === "Level_One"){
    button.visible = false;
    background("GRAY")
    
    laser1.visible = true
    laser2.visible = true
    laser3.visible = true 

 

    spy.visible = true


    if (laser1.x>1400 ) {
        laser1.velocityX = -20
    }


    if (laser1.x<100 ) {
        laser1.velocityX = 20
    }

    if (laser2.x<100 ) {
        laser2.velocityX = 20
    }


    if (laser2.x>1400) {
        laser2.velocityX = -20
    }

    if (laser3.x>1400 ) {
        laser3.velocityX = -20
    }


    if (laser3.x<100 ) {
        laser3.velocityX = 20
    }

    gem.visible = true;

    if (spy.isTouching(lasers_group)) {
      lasers_group.setVelocityXEach(0)
      spy.visible = false
        
        gameState = "end"
    
    }

    if (spy.isTouching(gem)) {
        lasers_group.setVelocityXEach(0)
        spy.visible = false
       laser1.visible = false
       laser2.visible = false
       laser3.visible = false
       gem.visible = false
       gameState = "Level_Two"
       spy.x = 600
    spy.y = 765
    }
}
else if (gameState === "Level_Two") {
    background("LightBlue")

    laser4.visible = true
    laser5.visible = true    
    laser6.visible = true
    laser7.visible = true



 
    if (laser4.x>1400 ) {
        laser4.velocityX = -25
    }


    if (laser4.x<100 ) {
        laser4.velocityX = 25
    }

    
    if (laser5.x<100 ) {
        laser5.velocityX = 25
    }


    if (laser5.x>1400) {
        laser5.velocityX = -25
    }



    if (laser6.x>1400 ) {
        laser6.velocityX = -25
    }


    if (laser6.x<100 ) {
        laser6.velocityX = 25
    }

    if (laser7.x<100 ) {
        laser7.velocityX = 25
    }


    if (laser7.x>1400) {
        laser7.velocityX = -25
    }

    
    gem.visible = true

    spy.visible = true

    if (spy.isTouching(lasers_group2)) {
        lasers_group2.setVelocityXEach(0)
        spy.visible = false
          
          gameState = "end"
    }
}

else if (gameState === "end") {
    background("red");
    text("Game Over", 765, 325)
    reset.visible = true;

    
}
if (mousePressedOver(reset)) {
    gameState = "homePage"
    laser1.visible = false;
    laser2.visible = false;
    laser3.visible = false;
    laser4.visible=false;
    laser5.visible = false;
    laser6.visible = false;
    laser7.visible = false;
   gem.visible = false;
    reset.visible = false;
   laser1.velocityX=20
   laser2.velocityX = -20
   laser3.velocityX=20
   spy.x = 600
   spy.y = 765
}

if (keyDown("UP_ARROW")) {
    spy.y = spy.y-7.5
 }
 
 if (keyDown("DOWN_ARROW")) {
     spy.y = spy.y+7.5
 }
 
 if (keyDown("RIGHT_ARROW")) {
     spy.x = spy.x+7.5 
 }
 
 if (keyDown("LEFT_ARROW")) {
     spy.x = spy.x-7.5
 }




drawSprites()
}