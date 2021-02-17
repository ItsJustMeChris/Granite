import { DevToolbox } from "../helpers/Toolbox";
import { Vector2 } from "../helpers/Vector2";
import { EntityList } from "./EntityList";
import { Player } from "./Player";
import { World } from "./World";

export class Game {
    private ctx: CanvasRenderingContext2D;
    public world: World;
    private entities: EntityList;
    private localPlayer: Player;

    constructor(canvas: HTMLCanvasElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        this.ctx.transform(1, 0, 0, -1, canvas.width / 2, canvas.height / 2)

        this.world = new World();
        this.entities = new EntityList();
        this.localPlayer = new Player(new Vector2(0, 0));

        new DevToolbox(this);

        this.entities.pushEntity(this.localPlayer);
    }

    private render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.world.render(this.ctx, this.localPlayer.getPosition());
        this.entities.render(this.ctx);
    }

    private tick = (timestamp: number) => {
        this.world.tick();
        this.entities.tick();
        this.render();
        requestAnimationFrame(this.tick);
    }

    public Start() {
        console.log("Game Initialized");
        requestAnimationFrame(this.tick);
    }
}