import { Vector2 } from "../helpers/Vector2";
import { v4 as uuidv4 } from 'uuid';

export class Entity {
    private position: Vector2;
    private uuid: string;
    constructor(position: Vector2) {
        this.position = position;
        this.uuid = uuidv4();
    }

    identify(uuid: string): boolean {
        return uuid === this.uuid;
    }

    tick() {

    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 10, 10);
    }

    getPosition() {
        return this.position;
    }

    stepUp() {
        this.position.y += 10;
    }

    stepDown() {
        this.position.y -= 10;
    }

    stepLeft() {
        this.position.x -= 10;
    }

    stepRight() {
        this.position.x += 10;
    }
}