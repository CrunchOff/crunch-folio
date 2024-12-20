let objRadio;
let bgImage;
let grey = 150;
var rise = true;
let titleLayer; // Couche 2D pour le titre
let textLayer; // Couche 2D pour le texte
let customTitleFont;
let customTextFont;
let textString;
let blendModeStep;

function preload() {
    objRadio = loadModel('3d_models/radio.obj', true); // Charger le modèle 3D
    bgImage = loadImage('img/IMG_3074.png');          // Charger l'image de fond
    customTitleFont = loadFont('fonts/CormorantGaramond-BoldItalic.ttf');
    customTextFont = loadFont('fonts/CormorantGaramond-Light.ttf');
    blendModeStep = DARKEST;
    textString = 'Le numérique partout, tous les jours, dans notre quotidien.\nUn retour à l\'essentiel, des formes numériques bruts.\nEn ayant pour but de révéler ce qui se cache derrière les images.';
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    pixelDensity(displayDensity()); // Adapte la densité de pixels au dispositif
    resetMatrix();
    imageMode(CENTER);
    corrigerWEBGL();
    blendMode(BLEND);
    image(bgImage, width / 2, height / 2, width, height);

    // Résolution supérieure pour le texte (facteur d'échelle)
    let scaleFactor = 2;

    // Créer une couche 2D haute résolution pour le titre
    titleLayer = createGraphics(windowWidth * scaleFactor, windowHeight * scaleFactor);
    titleLayer.textFont(customTitleFont);
    titleLayer.textAlign(CENTER, CENTER);
    titleLayer.textSize(160 * scaleFactor); // Augmenter la taille proportionnellement
    titleLayer.fill(50);
    titleLayer.noStroke();
    titleLayer.background(255, 0); // Transparence
    titleLayer.text('ARTE POVERA', titleLayer.width / 2, titleLayer.height / 2);
    titleLayer.smooth();

    // Créer une couche 2D haute résolution pour le texte
    textLayer = createGraphics(windowWidth * scaleFactor, windowHeight * scaleFactor);
    textLayer.textFont(customTextFont);
    textLayer.textAlign(CENTER, CENTER);
    textLayer.textSize(32 * scaleFactor); // Augmenter la taille proportionnellement
    textLayer.fill(50);
    textLayer.noStroke();
    textLayer.background(255, 0); // Transparence
    textLayer.text(textString, textLayer.width / 2, textLayer.height / 2);
    textLayer.smooth();
}

function draw() {
    blendMode(blendModeStep);
    noFill();
    greyVariation();

    stroke(grey - 10);
    strokeWeight(2);
    translate(0, 0, 1);
    scale(8);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    model(objRadio);

    blendMode(BLEND);
    resetMatrix();
    corrigerWEBGL();

    // Effacer et redessiner le texte avec la chaîne actuelle
    textLayer.clear();
    textLayer.text(textString, textLayer.width / 2, textLayer.height / 2);

    // Afficher les couches graphiques redimensionnées sur le canevas principal
    image(titleLayer, width / 2, height / 2, width, height); // Redimensionner le titre
    image(textLayer, width / 2, height / 2, width, height); // Redimensionner le texte
}

function greyVariation() {
    if (grey < 150 && rise) {
        grey += 0.1;
    } else if (grey > 70 && !rise) {
        grey -= 0.1;
    }

    if (grey >= 150) {
        rise = false;
    } else if (grey <= 70) {
        rise = true;
    }
}

function corrigerWEBGL() {
    translate(width / 2 * (-1), height / 2 * (-1));
}

function mousePressed() {
    if (blendModeStep === DARKEST) {
        textString = 'Simplification des formes, des couleurs, de la technique et des interactions.\nIncorporer des éléments rudimentaires, retraçant l\'histoire et l\'évolution de la technologie.';
        blendModeStep = MULTIPLY;

        resetMatrix();
        imageMode(CENTER);
        corrigerWEBGL();
        blendMode(BLEND);
        image(bgImage, width / 2, height / 2, width, height);

    } else if (blendModeStep === MULTIPLY) {
        blendModeStep = SCREEN;

        resetMatrix();
        imageMode(CENTER);
        corrigerWEBGL();
        blendMode(BLEND);
        image(bgImage, width / 2, height / 2, width, height);

        textString = 'Rendre visible les mécanismes invisibles.\nDes formes minimalistes, compositions simples.';

    } else if (blendModeStep === SCREEN) {
        blendModeStep = DARKEST;

        resetMatrix();
        imageMode(CENTER);
        corrigerWEBGL();
        blendMode(BLEND);
        image(bgImage, width / 2, height / 2, width, height);

        textString = 'Le numérique partout, tous les jours, dans notre quotidien.\nUn retour à l\'essentiel, des formes numériques bruts.\nEn ayant pour but de révéler ce qui se cache derrière les images.';
    }
}
