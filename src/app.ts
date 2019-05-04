import "phaser";
const config: GameConfig = {
  title: "game",
  width: 900,
  height: 600,
  parent: "game",
  backgroundColor: "#CCC"
};
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new Game(config);
};