const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof,rooftop;

function setup (){

createCanvas (windowWidth/1,windowHeight/1)


engine = Engine.create();
world = engine.world;

roof = createSprite (639,200,400,15);
roof.shapeColor = ("lightgrey")

p1 = new Pendulum (480,500,5,5)
p2 = new Pendulum (560,500,5,5)
p3 = new Pendulum (640,500,5,5)
p4 = new Pendulum (720,500,5,5)
p5 = new Pendulum (800,500,5,5)

s1 = new Sling(p1.body,{x:480, y:200});
s2 = new Sling(p2.body,{x:560, y:200});
s3 = new Sling(p3.body,{x:640, y:200});
s4 = new Sling(p4.body,{x:720, y:200});
s5 = new Sling(p5.body,{x:800, y:200});

Engine.run(engine)
}

function draw (){
 rectMode(CENTER)
 background ("black")

p1.display();
p2.display();
p3.display();
p4.display();
p5.display();

s1.display();
s2.display();
s3.display();
s4.display();
s5.display();

drawSprites();

//mouseDragged()

}



function mouseDragged (){

Matter.Body.setPosition(p5.body,{ x: mouseX, y: mouseY})

}
