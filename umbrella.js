class  Umbrella{
     
    constructor(x,y){
        var Options={
            isStatic : true
        }
        this.x = x 
        this.y = y
        this.umbrella = Matter.Bodies.circle(x, y, 10, Options);
        this. bruce = loadImage("bruce.jpg");
    }

    display(){
       
    image(this.bruce,this.umbrella.position.x,this.umbrella.position.y,300,300);
    
    }

}