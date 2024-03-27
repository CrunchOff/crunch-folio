let x;
let y;
let diameter;
let fadeAmount = 0;

function setup() {
  var canvas = createCanvas(1000, 80);
  canvas.parent('sketch-holder');
  background(10);
  x = 0;
  y = 0;
  r = width / 2;
  diameter = 0;
}

function draw() {
  // Effacer l'écran avec une couleur de fond transparente
  let t = map(millis(), 0, 200000, 0, 255);
  background(10, 10, 10, t);

  // Dessiner l'ellipse
  stroke(x/2, 120, y*20);
  noFill();
  ellipse(x, y, diameter, diameter);

  // Mettre à jour les variables
  x = cos(millis()*0.0005)*460 + 500;
  y = cos(millis()*0.00045)*20 + 40;
  diameter = y/1.8;

  // Augmenter la valeur de fondu
  fadeAmount = constrain(fadeAmount + 1, 0, 255);
}
