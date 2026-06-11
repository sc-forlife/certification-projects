const heater1 = document.getElementById("Q");
const drumPadQ = document.getElementById("Heater-1");
const display = document.getElementById("display");
const padBank = document.getElementById("pad-bank");

function onPlay(audio, id) {
  audio.play();

  display.textContent = id;

  audio.addEventListener("ended", () => {
    display.textContent = "";
  });
}

padBank.addEventListener("click", (e) => {
  onPlay(e.target.childNodes[1], e.target.id);
});
