import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("frogBackground", "assets/bg.png");
        this.load.image("froghappy", "assets/faces/glad.png");
        this.load.image("lilypad", "assets/lilypad.png");
    }

    create() {
        this.scene.start("Level1");
    }
}
