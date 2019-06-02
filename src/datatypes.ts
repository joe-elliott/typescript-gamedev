import "phaser";

export class DataTypesScene extends Phaser.Scene {


    constructor() {
        super({
            key: "DataTypesScene"
        });
    }

    init(params): void {
    
    }

    preload(): void {
    
    }

    create(): void {
        /* boolean */
        let addCircle : boolean   // declaration
        addCircle = true          // assignment

        /* number */
        let radius : number = 20 // declaration and assignment

        /* string */
        let name : string = "joe elliott"

        if(addCircle) {
            this.add.circle(20, 20, radius, 0xee3322)
            this.add.text(20, 20, name)
        }
    }
    
    update(time): void {
 
    }
};