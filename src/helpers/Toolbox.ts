import * as dat from 'dat.gui';
import { Game } from "../classes/Game";

export class DevToolbox {
    constructor(game: Game) {
        const gui = new dat.GUI();

        const title = gui.addFolder('DevToolbok');

        const terrain = title.addFolder('World Generation');
        terrain.add(game.world.depths, 'water', -1, 1, 0.01).name("water");
        terrain.add(game.world.depths, 'sand', -1, 1, 0.01).name("sand");
        terrain.add(game.world.depths, 'dirt', -1, 1, 0.01).name("dirt");
        terrain.add(game.world.depths, 'grass', -1, 1, 0.01).name("grass");
        terrain.add(game.world.depths, 'gravel', -1, 1, 0.01).name("gravel");
        terrain.open();
    }
}
