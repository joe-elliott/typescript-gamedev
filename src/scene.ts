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
        /*
          Homework #1: 
          1)  Declare a variable and assign it the value 0xee3322.  Use it in place of the static value in the circle function below.
              Hint:  0xee3322 is a hexadecimal number
          2)  Through experimentation we learned that 0xee3322 represents a color.  Research and report on how.
        */

        let characterColor : number = 0xee3322;

        /*
          Homework #2: 
          1)  Declare variables for x, y and radius.  Assign them values and use them in the this.add.circle() method below.
          2)  
        */

        this.character = this.add.circle(0, 0, 10, characterColor)

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