let x;
let y;
let diameter;
let fadeAmount = 0;
let width;

function setup() {
  if (windowWidth < 768) { // Vérifier si la largeur de la fenêtre est inférieure à 768px (taille d'écran typique des téléphones)
    var canvas = createCanvas(windowWidth-20, 80);
  } else {
    var canvas = createCanvas(windowWidth/2.6, 80);
  }
  canvas.parent('sketch-holder');
  background(10);
  width = canvas.width; // Utiliser la largeur du canevas plutôt que la largeur de la fenêtre
  x = 0;
  y = 0;
  r = width / 2;
  diameter = 0;
}

function draw() {
  // Effacer l'écran avec une couleur de fond transparente
  let t = map(millis(), 0, 1000000, 0, 255);
  background(8, 11, 13, t);

  // Dessiner l'ellipse
  stroke(x/2, 140, y*20);
  noFill();
  ellipse(x, y, diameter, diameter);

  // Mettre à jour les variables
  x = cos(millis()*0.0005)*(width/2.1) + (width/2);
  y = cos(millis()*0.00045)*20 + 40;
  diameter = y/2;

  // Augmenter la valeur de fondu
  fadeAmount = constrain(fadeAmount + 1, 0, 255);
}

// Redimensionner le canevas lorsque la taille de la fenêtre change
function windowResized() {
  if (windowWidth < 768) {
    resizeCanvas(windowWidth-20, 80);
  } else {
    resizeCanvas(windowWidth/2.6, 80);
  }
}
