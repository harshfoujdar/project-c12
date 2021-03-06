var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =loadImage("apple.png");
  leafImg=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
edges= createEdgeSprites();
apple=createGroup();
leaf=createGroup();

}


function draw() {
  background(0);
  createApples();
  createLeaf();
  rabbit.x=mouseX;
  rabbit.collide(edges);
  
  drawSprites();
}
function createApples(){
  if (frameCount % 60===0){
    apple=createSprite(random(50,350),40,10,10);
     apple.addImage(appleImg);
       apple.scale=0.1;
         apple.velocityY=4
  }
  
}
function createLeaf(){
  if (frameCount % 100===0){
    leaf=createSprite(random(50,350),50,20,20);
       leaf.addImage(leafImg);
         leaf.scale=0.1;
          leaf.velocityY=3
  }}