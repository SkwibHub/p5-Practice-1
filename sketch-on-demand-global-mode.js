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

/*
This mode is most useful when you're building a program that uses other libraries and you want to control how p5 is loaded on the page with the others. You can read more about it here. But another interesting use of on-demand global mode is the ability to call p5 explicitly and then use p5 functions outside of setup(). 
*/
