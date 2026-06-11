const display = document.getElementById("display");
const padBank = document.getElementById("pad-bank");

function onPlay(audio) {
  audio.play();

  display.textContent = audio.title;

  audio.addEventListener("ended", () => {
    display.textContent = "";
  });
}

function keyDownPlay(key) {
  if (!document.getElementById(key.toUpperCase())) {
    return;
  }

  const sound = document.getElementById(key.toUpperCase());

  onPlay(sound);
}

padBank.addEventListener("click", (e) => {
  onPlay(e.target.childNodes[1], e.target.getAttribute("aria-label"));
});

document.addEventListener("keydown", (e) => {
  keyDownPlay(e.key);
});
