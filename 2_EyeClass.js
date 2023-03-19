let e1, e2, e3;
function setup() {
  createCanvas(640, 360);
  noStroke();
  e1 = new Eye(300, 60, 270);
  e2 = new Eye(140, 240, 90);
  e3 = new Eye(520, 300, 180);
}

function draw() {
  background(100);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
}

class Eye {
  constructor(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0.0;
  }
  update(mx, my) {
    this.angle = Math.atan2(my - this.y, mx - this.x);
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  }
}
