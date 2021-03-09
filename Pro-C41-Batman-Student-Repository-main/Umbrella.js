class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //load the image of the man.png 
        this.manImage = loadImage("man.png");
        //create a umbrella body which will be a Circular Phy Engine body
        this.umbrella= Bodies.circle(x,y,50,options);
        this.radius = 50;
        // Add the umbrella body to the world.
        World.add(world,this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //use image() to draw the image of the man.
        image(this.manImage,pos.x,pos.y+70,300,300)
    }
}