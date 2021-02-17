import { Entity } from "./Entity";

export class EntityList {
    private entities: Entity[] = [];
    constructor() { }

    pushEntity(entity: Entity): boolean {
        this.entities.push(entity);
        return true;
    }

    popEntity(uuid: string): boolean {
        const pre: number = this.entities.length;
        this.entities = this.entities.filter((entity: Entity) => entity.identify(uuid));
        return pre > this.entities.length;
    }

    tick() {
        this.entities.forEach((entity: Entity) => entity.tick());
    }

    render(ctx: CanvasRenderingContext2D) {
        this.entities.forEach((entity: Entity) => entity.render(ctx));
    }
}