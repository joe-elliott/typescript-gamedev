import "phaser";

export class OperatorsScene extends Phaser.Scene {

    constructor() {
        super({
            key: "OperatorsScene"
        });
    }

    init(params): void {
    
    }

    preload(): void {
    
    }

    create(): void {
        let op1 : boolean;
        op1 = true;

        let op2 : boolean;
        op2 = false;

        /*
          operators
          unary     - one argument
          binary    - two arguments
          ternary   - three arguments
        */

        /*
          BOOLEAN
          and - && - binary - true if both are true, false otherwise
          or  - || - binary - true if either are true, false otherwise
          not - !  - unary  - inverts the value 
        */

        if (!op1) {
            this.add.circle(20, 20, 10, 0xee3322);
        }

        /*
          NUMBER
          plus     - +
          minus    - -
          multiply - !
          divide   - /
          modulus  - %
        */
    }
    
    update(time): void {
 
    }
};