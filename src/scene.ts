import "phaser";
import { LEFT } from "phaser";

export class GameScene extends Phaser.Scene {

    prevTime: number;
    character: Phaser.GameObjects.Arc;

    leftKey: Phaser.Input.Keyboard.Key;
    rightKey: Phaser.Input.Keyboard.Key;
    upKey: Phaser.Input.Keyboard.Key;
    downKey: Phaser.Input.Keyboard.Key;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(params): void {
    // TODO
    }

    preload(): void {
    // TODO
    }

    create(): void {
        this.character = this.add.circle(0, 0, 10, 0xee3322)

        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
    }
    
    update(time): void {
        var delta = time - this.prevTime

        if(this.leftKey.isDown) {
            this.character.x -= 10
        }

        if(this.rightKey.isDown) {
            this.character.x += 10
        }

        if(this.upKey.isDown) {
            this.character.y -= 10
        }

        if(this.downKey.isDown) {
            this.character.y += 10
        }

        this.character.updateDisplayOrigin()

        this.prevTime = time
    }
};