const display = document.getElementById("display");
const padBank = document.getElementById("pad-bank");

function onPlay(audio) {
  audio.play();

  display.textContent = audio.title;

  display.style;

  audio.addEventListener("ended", () => {
    display.textContent = "";
  });
}

function keyDown(e) {
  const drumPad = document.querySelector(`.${e.code}`);
  drumPad.style.backgroundColor = "rgba(0, 255, 255, 0.705)";
  keyUp(drumPad);
}

function keyUp(drumPad) {
  document.addEventListener("keyup", () => {
    drumPad.style.backgroundColor = "aqua";
  });
}

padBank.addEventListener("click", (e) => {
  onPlay(e.target.childNodes[1]);
});

document.addEventListener("keydown", (e) => {
  const sound = document.getElementById(e.key.toUpperCase());
  if (!sound) return;
  onPlay(sound);
  keyDown(e);
});
