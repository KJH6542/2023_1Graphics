let img;
function setup() {
  createCanvas(400, 400, WEBGL);
  img = loadImage("https://raw.githubusercontent.com/KJH6542/img/main/RB.png");
}

function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(140);
}
