/*
 This is a multiline comment.
 I can easily type multiple lines.
*/

// This is a single line comment

import "phaser";
import { GameScene } from "./scene";
import { DataTypesScene } from "./datatypes";
import { OperatorsScene } from "./operators";

const config: GameConfig = {
  title: "game",
  width: 900,
  height: 600,
  parent: "game",
  backgroundColor: "#225277",
  scene: [OperatorsScene],
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