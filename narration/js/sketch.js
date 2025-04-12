let customTitleFont; 
let customTextFont;
let customTextFont2;

let scenes = [];
let i = 0;
let table;

let index = 1;
let up = 0;

let posX = 0;
let posY = 0;
let posZ = 0;

let rain = []; // Tableau des gouttes

let wind = 0;
let rainIntensity = 1;

let music;

function preload() {
	customTitleFont = loadFont('fonts/CormorantGaramond-BoldItalic.ttf');
	customTextFont = loadFont('fonts/CormorantGaramond-Medium.ttf');
	customTextFont2 = loadFont('fonts/CormorantGaramond-MediumItalic.ttf');

	table = loadTable('tableau/histoire.csv', 'csv');

	music = loadSound('music/sound.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	imageMode(CENTER);
	textAlign(CENTER);
	textWrap(WORD);
	corrigerWEBGL();

	for (let r = 0; r < table.getRowCount(); r++) {
		let row = table.getRow(r);
		let cells = row.arr;
		let title = cells[0];
		let texts = cells.slice(1).filter(t => t.trim() !== "");
		scenes.push({ title, texts });
	}

	for (let i = 0; i < 200; i++) {
		rain.push(new Drop());
	}

	frameRate(60);
	console.log("Scènes chargées :", scenes.length);

	music.setVolume(0.5);

	let playButton = createButton('▶️ Lancer la musique');
	playButton.position(20, 20);
	playButton.style('padding', '10px');
	playButton.style('font-size', '16px');
	playButton.style('background', '#111');
	playButton.style('color', 'white');
	playButton.style('border', '1px solid white');
	playButton.style('border-radius', '5px');

	playButton.mousePressed((e) => {
		// Empêche le clic de remonter vers p5.js
		e.stopPropagation();

		// Débloque contexte audio si besoin
		if (getAudioContext().state !== 'running') {
			getAudioContext().resume();
		}

		if (music.isPlaying()) {
			music.pause();
			playButton.html('▶️ Lancer la musique');
		} else {
			music.loop();
			playButton.html('⏸️ Mettre en pause');
		}
	});
}

function draw() {
	background(0, 0, 0, 240);

	if (index >= 0 && up == 1) {
		index += 0.25;
	} 
	if (index >= 100) {
		up = 0;
	} 
	if (index <= 100 && up == 0) {
		index -= 0.25;
	} 
	if (index <= 0) {
		up = 1;
	}
	posZ = index / 1.5;

	push();
	resetMatrix();
	translate(-width/2, -height/2);
	for (let drop of rain) {
		drop.fall();
		drop.show();
	}
	pop();

	translate(posX, posY, posZ);

	if (scenes[i]) {
		let scene = scenes[i];

		textFont(customTitleFont);
		textSize(80);
		fill(255);
		text(scene.title, 0, -height / 4);

		textFont(customTextFont);
		textSize(26);
		let yStart = -height / 10;
		for (let j = 0; j < scene.texts.length; j++) {
			if (scene.texts[j].trim() === "O") {
				textFont(customTextFont2);
			} else {
				textFont(customTextFont);
			}
			text(scene.texts[j], 0, yStart + j * 64);
		}
	}
}

function mousePressed() {
	if (getAudioContext().state !== 'running') {
		getAudioContext().resume();
	}

	if (i < scenes.length - 1) {
		i++;
	}

	if (wind === 0) {
		wind = random(-2.5, 2.5);
		rainIntensity = random(0.8, 1.2);
	} else {
		wind = 0;
		rainIntensity = 1;
	}
}

function corrigerWEBGL() {
	translate(-width / 2, -height / 2);
}

class Drop {
	constructor() {
		this.reset();
	}

	reset() {
		this.x = random(width);
		this.y = random(-500, -50);
		this.z = random(0, 20);
		this.len = map(this.z, 0, 20, 10, 20);
		this.yspeed = map(this.z, 0, 20, 4, 10);
	}

	fall() {
		this.x += wind;
		this.y += this.yspeed * rainIntensity;

		let grav = map(this.z, 0, 20, 0, 0.2) * rainIntensity;
		this.yspeed += grav;

		if (this.y > height || this.x < 0 || this.x > width) {
			this.reset();
			this.y = random(-200, -100);
		}
	}

	show() {
		let thick = map(this.z, 0, 20, 1, 3);
		noStroke();
		fill(180, 180, 255, 180);
		ellipse(this.x, this.y, thick, this.len);
	}
}
