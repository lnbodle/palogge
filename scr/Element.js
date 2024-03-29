class Element {
  
  constructor(x,y,w,h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color(255)
    this.canvas = canvas
  }

  pointIn(tx,ty) {
    if (tx > this.x && tx < this.x + this.w && ty > this.y && ty < this.y +this.h) return true;
    return false;
  }

  draw() {
    fill(this.color)
    stroke(180)
    rect(this.x,this.y,this.w,this.h);
  }
}
