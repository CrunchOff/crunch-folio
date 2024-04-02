let x;
let y;
let diameter;
let fadeAmount = 0;
let width;

function setup() {
  var canvas = createCanvas(windowWidth, 80);
  canvas.parent('sketch-holder');
  background(8, 11, 13);
  width = canvas.width; // Utiliser la largeur du canevas plutôt que la largeur de la fenêtre
  x = 0;
  y = 0;
  r = width / 2;
  diameter = 0;
}

function draw() {

  // Dessiner l'ellipse
  //fill(y, x/8, x);
  fill(8,11,13);
  //noFill();
  stroke(255);
  ellipse(x, y, diameter, diameter);

  // Mettre à jour les variables
  x = -sin(millis()*0.0008)*(width/2.2) + (width/2.1);
  y = cos(millis()*0.00402)*40 + 40;
  diameter = x/20 + 15;
}

// Redimensionner le canevas lorsque la taille de la fenêtre change
function windowResized() {
  if (windowWidth < 768) {
    resizeCanvas(windowWidth-20, 80);
  } else {
    resizeCanvas(windowWidth/2.6, 80);
  }
}
