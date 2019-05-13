import "phaser";

export class GameScene extends Phaser.Scene {

    simonText: Phaser.GameObjects.Text;
    gretaText: Phaser.GameObjects.Text;
    prevTime: number
    rectangle: Phaser.GameObjects.Rectangle;

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
        this.simonText = this.add.text(10, 10, '',
            { font: '24px Bold', fill: '#ffbb45' });
        this.gretaText = this.add.text(10, 10, '',
            { font: '24px Bold', fill: '#ff6145' });

        this.rectangle = this.add.rectangle(300, 300, 200, 200, 0xffcc00)

        this.simonText.text = "Simon";
        this.gretaText.text = "Greta";    
    }

    update(time): void {
        var delta = time - this.prevTime

        if(this.game.input.activePointer.leftButtonDown()) {
            this.simonText.originX = Math.random() * -14
            this.simonText.originY = Math.random() * -20

            this.gretaText.originX = Math.random() * -14
            this.gretaText.originY = Math.random() * -20
        } else {
            this.gretaText.originX += delta * .01;
            this.gretaText.originY += delta * .01;

            this.simonText.originX += delta * .01;
            this.simonText.originY += delta * .01;
        }

        this.simonText.updateDisplayOrigin()
        this.gretaText.updateDisplayOrigin()
        this.rectangle.updateDisplayOrigin()

        this.prevTime = time
    }
};