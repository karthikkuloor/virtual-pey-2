class Food{
    constructor(){
        this.food=0;
        this.lastFed=0;
        this.image = loadImage("images/Milk.png");
    }
    display(){
        var x=80,y=100
    imageMode(CENTER)
    image(this.image,100,100,100,200)

    if(this.food!=0){
    for(var i=0;i<this.food;i++){
        if(i%10===0){
    x=80;
    y=y+50;
        }
        image(this.image,x,y,100,200)   
        x=x+30 
    }
      }

    }
   getFoodStock() {
    var stock=database.ref('food')   
    stock.on("value",(data)=>{
   foodobject=data.val();
    })
   }
   updateFoodStock(abc) {
     database.ref('/').update({
         food:abc
     }) 
   } 

}
