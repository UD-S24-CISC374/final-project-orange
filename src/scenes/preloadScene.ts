import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("frogBackground", "assets/bg.png");
        this.load.image("froghappy", "assets/faces/glad.png");
        this.load.image("lilypad", "assets/newLilypad.png");
        this.load.image("start", "assets/start.png");
        this.load.image("instructions", "instructions/newLilypad.png");
        this.load.image("frogcool", "assets/faces/cool.png");
        this.load.image("frogum", "assets/faces/um.png");
    }

    create() {
        let bg = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "frogBackground"
        );
        let scaleX = this.cameras.main.width / bg.width;
        let scaleY = this.cameras.main.height / bg.height;
        let scale = Math.max(scaleX, scaleY);
        bg.setScale(scale).setScrollFactor(0);

        this.add
            .text(this.cameras.main.centerX, 300, "Cross the Pond", {
                color: "#000",
                fontSize: "100px",
                fontStyle: "bold",
            })
            .setOrigin(0.5, 1);
        const start = this.add.text(
            this.cameras.main.centerX - 100,
            350,
            "Start",
            {
                color: "#000",
                fontSize: "75px",
                fontStyle: "bold",
            }
        );
        const instructions = this.add.text(
            this.cameras.main.centerX - 250,
            425,
            "Instructions",
            {
                color: "#000",
                fontSize: "75px",
                fontStyle: "bold",
            }
        );
        instructions
            .setInteractive()
            .on("pointerdown", () => this.scene.start("Level1"))
            .on("pointerover", () => instructions.setScale(1.1))
            .on("pointerout", () => instructions.setScale(1));
        start
            .setInteractive()
            .on("pointerdown", () => this.scene.start("Level1"))
            .on("pointerover", () => start.setScale(1.1))
            .on("pointerout", () => start.setScale(1));

        this.add.image(this.cameras.main.centerX, 150, "frogcool").setScale(2);
        this.add.image(520, 390, "frogum");
        this.add.image(370, 465, "frogum");
        // this.scene.start("Start");
    }
}
