class Drop{
     

    constructor(x,y){
        var xpos;
        var ypos;
        this.xpos = x;
        this.ypos=y;
        var Options={
            friction : 0.1

            
        }

        Matter.Bodies.circle(x, y, 10, Options);
        this.raindrop = loadImage("raindrop.jpg");
        
        
    }
    static draw(){
        ellipse(this.xpos,this.ypos,10,10);
        // this.drop = addImage(raindrop);
    }

    static update(){
        // if(this.drop.position.y >= 500){
            if(this.ypos >=500){
            Matter.body.setPosition(this.drop(random(0,400) , random(0,10)));

        }

    }
}