import Phaser from "phaser";
import Level1 from "./scenes/level1";

import Level2 from "./scenes/level2";
import Level3 from "./scenes/level3";
import Level4 from "./scenes/level4";
import Level5 from "./scenes/level5";
import Level6 from "./scenes/level6";
import Level7 from "./scenes/level7";
import Level8 from "./scenes/level8";
import Level9 from "./scenes/level9";
import Level10 from "./scenes/level10";
import PreloadScene from "./scenes/preloadScene";

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

export const CONFIG = {
    title: "My Untitled Phaser 3 Game",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#fff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [
        PreloadScene,
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        Level6,
        Level7,
        Level8,
        Level9,
        Level10,
    ],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
