import Phaser from "phaser";

export default class Start extends Phaser.Scene {
    constructor() {
        super({ key: "Start" });
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
            .text(this.cameras.main.centerX, 200, "Cross the Pond", {
                color: "#fff",
                fontSize: "100px",
            })
            .setOrigin(0.5, 1);

        const start = this.add.image(200, 400, "start");
        start
            .setInteractive()
            .on("pointerdown", () => this.scene.start("Level1"))
            .on("pointerover", () => start.setScale(1.1))
            .on("pointerout", () => start.setScale(1));

        const instructions = this.add.image(
            this.cameras.main.width - 200,
            400,
            "exit"
        );
        instructions
            .setInteractive()
            .on("pointerover", () => instructions.setScale(1.1))
            .on("pointerout", () => instructions.setScale(1));
    }
}
