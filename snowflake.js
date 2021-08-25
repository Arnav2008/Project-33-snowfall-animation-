class Snowflake
{
    constructor(x,y)
    {
        var options=
        {
            density: 1.0,
            friction: 0.01,
            restitution: 0.1

        }
        this.body = Bodies.circle(x,y,5,options)
        this.radius = 18;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    Repeat()
    {
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,1095),y:random(0,720)});

        }
    }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);

            imageMode(CENTER);
            image(this.image, 0, 0, this.radius*2, this.radius*2);
             pop();
        }  
    
}