let img;
let song;
let slider;
let sliderVolume;
let sliderRate;
let sliderPan;
let mic;
let button;
let laugh;

function preload() {
  img = createImg("minion_guitar.jpg");
}

function setup() {

  //creating minion
  createCanvas(600, 400);

  //loading sound and slider
  song = loadSound("despacito.mp3",loaded);
  laugh = loadSound("Voice-Cartoon_Laugh-01.mp3");
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 3, 2, 0.01);

  //creating mouth animation
  mic = new p5.AudioIn();
  mic.start();

  //laughing sound
  laugh.playMode('restart');

}

function loaded(){
  console.log("loaded");

  //play and pause button
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function togglePlaying(){
  if(!song.isPlaying()) {
  song.play();
  button.html("You are annoying!");
  } else {
  song.stop();
  button.html("Sing!");
  }
}

function draw() {
  image(img, 0, 0);
  img.hide();

  song.setVolume(sliderVolume.value());
  song.rate(sliderRate.value());

  var vol = mic.getLevel();
  //stroke(0);
  fill(0);
  ellipse(200, 200, 50, 1 + vol * 200);
}

function keyPressed(){
  if(key == 'M'){
		if(!laugh.isPlaying()) {
  	laugh.play();
		}
  }
}
