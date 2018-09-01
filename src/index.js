import Phaser from "phaser";

console.log("hello");

let game;

window.onload = () => {
  let gameConfig = {
    type: Phaser.CANVAS,
    width: 550,
    height: 550,
    backgroundColor: 0x880044
  };

  game = new Phaser.Game(gameConfig);

  window.focus();
  resize();
  window.addEventListener("resize", resize, false);
};

function resize() {
  let canvas = document.querySelector("canvas");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
