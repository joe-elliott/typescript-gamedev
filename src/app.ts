import "phaser";
import { GameScene } from "./scene";
import { DataTypesScene } from "./datatypes";

const config: GameConfig = {
  title: "game",
  width: 900,
  height: 600,
  parent: "game",
  backgroundColor: "#225277",
  scene: [DataTypesScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
};
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new Game(config);
};