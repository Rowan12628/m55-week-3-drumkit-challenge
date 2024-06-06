let boomSound = new Audio("./sounds/boom.wav");
let clapSound = new Audio("./sounds/clap.wav");
let hihatSound = new Audio("./sounds/hihat.wav");
let kickSound = new Audio("./sounds/kick.wav");
let openhatSound = new Audio("./sounds/openhat.wav");
let rideSound = new Audio("./sounds/ride.wav");
let snareSound = new Audio("./sounds/snare.wav");
let tinkSound = new Audio("./sounds/tink.wav");
let tomSound = new Audio("./sounds/tom.wav");

const boomBtn = document.getElementById("boomBtn");
const clapBtn = document.getElementById("clapBtn");
const hihatBtn = document.getElementById("hihatBtn");
const kickBtn = document.getElementById("kickBtn");
const openhatBtn = document.getElementById("openhatBtn");
const rideBtn = document.getElementById("rideBtn");
const snareBtn = document.getElementById("snareBtn");
const tinkBtn = document.getElementById("tinkBtn");
const tomBtn = document.getElementById("tomBtn");

boomBtn.addEventListener("click", () => {
  boomSound.play();
});

clapBtn.addEventListener("click", () => {
  clapSound.play();
});

hihatBtn.addEventListener("click", () => {
  hihatSound.play();
});

kickBtn.addEventListener("click", () => {
  kickSound.play();
});

openhatBtn.addEventListener("click", () => {
  openhatSound.play();
});

rideBtn.addEventListener("click", () => {
  rideSound.play();
});

snareBtn.addEventListener("click", () => {
  snareSound.play();
});

tinkBtn.addEventListener("click", () => {
  tinkSound.play();
});

tomBtn.addEventListener("click", () => {
  tomSound.play();
});
