//Create variables here
var dog,dogimg,happydog,foodS,foodStock,database,feed,addfood,foodobject;
function preload()
{
dogimg=loadImage("images/dog.png");
happydog=loadImage("images/dog1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  console.log(database);

  createCanvas(1000, 1000);
  
  dog=createSprite(250,600,10,10)
  dog.addImage(dogimg);

  foodStock=database.ref("food");
  foodStock.on("value",readStock);

  foodobject=new Food();
  foodobject.display();

feed=createButton("feed the dog");
feed.position(400,10);
feed.mousePressed(feedDog);

addfood=createButton("add food");
addfood.position(400,40)
addfood.mousePressed(addfoods);
}


function draw() {  
background(46,139,87)


  drawSprites();
  
}
  function readStock(data){
    foodS=data.val();
     }
  //add styles here
 
 function writeStock(x){
   database.ref('/').update({
    food:x 
   })
 }
function feedDog(){
  dog.addImage(happydog);
foodobject.updateFoodStock(foodobject.getFoodStock()-1);  
database.ref('/').update()({
  food:foodobject.getFoodStock(),

})
}
function addfoods(){
 foodS++;
 database.ref('/') .update({
   food:foodS
 })                
}



