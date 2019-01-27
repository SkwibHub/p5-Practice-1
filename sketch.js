/*
Another option is on-demand global mode. To initialize on-demand global mode at any point in a web page's lifetime, simply call new p5() without any arguments. Calling p5 explicitly this way gives you more control over how your sketch is loaded, which is helpful when you’re working with other libraries.
*/

new p5();

var boop = random(100);

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255, 0, boop);
}
