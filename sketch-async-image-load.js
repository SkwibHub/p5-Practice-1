function setup() {
  createCanvas(400, 240);
  loadImage('Outlook-1470350287-1.jpg', drawCat);
}

function drawCat(img) {
  image(img, 0, 0);
}
