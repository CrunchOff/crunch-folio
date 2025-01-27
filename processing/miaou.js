let imageMiaou;
let x = 0;
let y = 0;
let n1 = 0;
let n2 = 0;

function preload() {
    imageMiaou = loadImage('processing/img/miaou-on-the-track.png');
}

function setup() {
    const canvas = createCanvas(select('#miaou-p5').width, select('#miaou-p5').height);
    canvas.parent('miaou-p5');
    

    image(imageMiaou, 50, 50, width*0.8, width*0.8);
    filter(THRESHOLD, 0.5);

    frameRate(15);
    console.log("Script miaou.js chargé avec succès !");
}

function draw() {
    blendMode(REPLACE);
    mousePosition();
    n1 = random(3);
    n2 = random(3);

    image(imageMiaou, x+n1, y+n2, width*0.8, width*0.8);

    filter(THRESHOLD, random(0.18,0.45));
}

function windowResized() {
    // Ajuster la taille du canevas au conteneur lorsqu'on redimensionne la fenêtre
    const container = select('#miaou-p5');
    resizeCanvas(container.width, container.height);
}

function mousePosition() {
    x = mouseX*0.12;
    y = mouseY*0.22;
}
