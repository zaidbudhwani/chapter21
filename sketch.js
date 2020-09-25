var edges
function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 100, 50, 80);

fr.shapeColor = "green";
fr.debug = true;
mr = createSprite(400,800,80,30);
mr.shapeColor = "green";
mr.debug = true;

mr.velocityY = -5;
fr.velocityY = 5;

edges = createEdgeSprites();

}

function draw() {
  background(0,0,0);  
bounceoff(mr,fr);
mr.bounceOff(edges);
fr.bounceOff(edges);
  drawSprites();
}

