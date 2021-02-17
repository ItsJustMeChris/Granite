import { Vector2 } from "../helpers/Vector2";
import { Entity } from "./Entity";

export class Player extends Entity {
    private movementFlag: number = 0;

    constructor(position: Vector2) {
        super(position);
        window.addEventListener('keydown', (event) => this.handleKeypress(event))
        window.addEventListener('keyup', (event) => this.handleKeypress(event))
    }

    handleKeypress(event: KeyboardEvent) {
        const moving = event.type === 'keydown';
        const code = event.code;
        if (['KeyW', 'ArrowUp'].some(e => e === code)) {
            this.stepUp();
        }
        if (['KeyS', 'ArrowDown'].some(e => e === code)) {
            this.stepDown();
        }
        if (['KeyA', 'ArrowLeft'].some(e => e === code)) {
            this.stepLeft();
        }
        if (['KeyD', 'ArrowRight'].some(e => e === code)) {
            this.stepRight();
        }
        if (['ShiftLeft', 'ShiftRight'].some(e => e === code)) {
            // TODO: movement
        }
    }

    tick() {

    }
}