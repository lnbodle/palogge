let canvas

function setup() {
  createCanvas(400, 400)
  //Global Varaible//
  dragging = false
  clicked = false
  canvas = new Canvas(0,0,width,height)
  textSize(10);
}

function mousePressed() {
  canvas.clicked = true;
} 

function draw() {
  
  background(color(230, 240, 255))
  canvas.update()
  canvas.draw()
}