import { Game } from "./classes/Game";

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

const game = new Game(canvas);

game.Start();