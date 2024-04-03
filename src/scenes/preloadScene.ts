import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("frogBackground", "assets/img/bg.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
