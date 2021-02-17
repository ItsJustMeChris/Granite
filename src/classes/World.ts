import { makeNoise2D } from "open-simplex-noise";
import { Vector2 } from "../helpers/Vector2";

export class World {
    private noise;
    private depths = {
        water: -0.2,
        sand: -0.08,
        dirt: -0.05,
        grass: 0.3,
        gravel: 0.4
    }

    private renderDistance: number = 500;

    constructor() {
        this.noise = makeNoise2D(0xDEADBEEF);
        console.log(this.noise(1, 1));
    }

    public tick() {

    }

    public render(ctx: CanvasRenderingContext2D, playerPosition: Vector2) {
        for (let x = -this.renderDistance; x < this.renderDistance; x += 10) {
            for (let y = -this.renderDistance; y < this.renderDistance; y += 10) {
                const noise = this.noise(x + playerPosition.x, y + playerPosition.y);
                if (noise <= this.depths.water) {
                    ctx.fillStyle = "#00FFF7";
                } if (noise <= this.depths.sand) {
                    ctx.fillStyle = "#FFC100";
                } if (noise <= this.depths.dirt) {
                    ctx.fillStyle = "#715A00";
                } if (noise <= this.depths.grass) {
                    ctx.fillStyle = "#52C800";
                } if (noise <= this.depths.gravel) {
                    ctx.fillStyle = "#D7D7D7";
                } else {
                    ctx.fillStyle = "#888888";
                }
                ctx.fillRect(x, y, 10, 10);
            }
        }
    }
}