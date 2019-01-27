/*
Why can't I assign variables using p5 functions and variables before setup()?

Well, technically, you can by using on-demand global mode. But that's a less common use of p5, so we'll explain that later and talk about the more common case first. In regular global mode, p5 variable and function names are not available outside setup(), draw(), mousePressed(), etc. (Except in the case where they are placed inside functions that are called by one of these methods.) What this means is that when declaring variables before setup(), you will need to assign them values inside setup() if you wish to use p5 functions. For example:
*/

var n;
function setup() {
  createCanvas(100, 100);
  n = random(100);
}
