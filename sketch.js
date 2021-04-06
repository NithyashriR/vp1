var pet,petimg,petimg2;
var database,foodS;

var feed,add
var foodobject
var Feedtime
var Lastfeed

function preload()
{
  petimg = loadImage("images/dogImg.png");
  petimg2 = loadImage("images/dogImg1.png");
}
function setup() {
  database = firebase.database();
  
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(petimg);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);
 
 
}

function draw() {  
  background("green");
    drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    
    pet.addImage(petimg2);
  }
  

 
drawSprites();
fill(0);
text("food remaining:"+foodS,200,200);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){x=0}
  else{x=x-1}
  database.ref('/').update({
    food:x
  })
 
}
