let x;
let y;
let diameter;
let width; // Renommé pour éviter toute confusion avec `windowWidth`

function setup() {
  // Création du canevas et assignation au conteneur HTML
  const canvas = createCanvas(windowWidth * 0.6, 80);
  canvas.parent('sketch-holder');
  
  // Initialisation des variables
  background(8, 11, 13);
  width = canvas.width; // Largeur du canevas
  x = 0;
  y = 0;
  diameter = 0;
}

function draw() {

  //fill(0, 225, 15); 
  blendMode(DIFFERENCE);
  stroke(0,255,0);
  strokeWeight(10);
  ellipse(x, y, diameter, diameter);

  // Mise à jour des coordonnées et de la taille de l'ellipse
  x = -sin(millis() * 0.0008) * (width / 2.4) + (width / 2.1);
  y = cos(millis() * 0.00402) * 32 + 40;
  diameter = abs(x) / 20 + 15; // Ajout de `abs()` pour éviter des tailles négatives
}

// Redimensionner le canevas en fonction de la taille de la fenêtre
function windowResized() {
  const newWidth = windowWidth < 768 ? windowWidth - 20 : windowWidth * 0.6;
  resizeCanvas(newWidth, 80); // Redimensionne le canevas

  // Réinitialiser les variables en fonction de la nouvelle largeur
  width = newWidth;
  x = 0;
  y = 0;
  diameter = 0;
}
