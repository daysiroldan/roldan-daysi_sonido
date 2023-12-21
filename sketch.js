let osc, playing, freq, amp;
let t = 0;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sawtooth');


}

function draw() {
  background(220);
  osc.start();
  freq = constrain(map(mouseX, 0, width, 500, 900), 500, 900);
  amp = 0.5;

  text("tap to play", 20, 20);
  text("freq: " + freq, 20, 40);
  text("amp: " + amp, 20, 60);


  if (playing) {

    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);

  }

  // t += 0.01;
}

function playOscillator() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  osc.amp(0, 0.5);
  playing = false;
}

