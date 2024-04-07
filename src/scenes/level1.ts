// import { Linter } from "eslint";
import Phaser from "phaser";

export default class Level1 extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private kid?: Phaser.Physics.Arcade.StaticGroup;
    private mom?: Phaser.Physics.Arcade.StaticGroup;
    private l1?: Phaser.GameObjects.Sprite;
    private l2?: Phaser.GameObjects.Sprite;
    private l3?: Phaser.GameObjects.Sprite;
    private l4?: Phaser.GameObjects.Sprite;
    private l5?: Phaser.GameObjects.Sprite;
    private l6?: Phaser.GameObjects.Sprite;

    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    constructor() {
        super({ key: "Level1" });
    }

    create() {
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "frogBackground"
        );
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

        //  PATH
        graphics.beginPath();
        graphics.moveTo(235, 415);
        graphics.lineTo(280, 150);
        graphics.lineTo(600, 150);
        graphics.lineTo(430, 300);
        graphics.lineTo(280, 150);
        graphics.lineTo(430, 300);
        graphics.lineTo(235, 415);
        graphics.lineTo(430, 300);
        graphics.lineTo(600, 450);
        graphics.lineTo(800, 300);
        graphics.lineTo(430, 300);
        graphics.lineTo(600, 150);
        graphics.lineTo(800, 300);
        graphics.lineTo(900, 500);
        graphics.lineTo(600, 450);
        graphics.lineTo(800, 300);
        graphics.lineTo(1000, 150);
        graphics.lineTo(900, 500);
        graphics.strokePath();

        this.l1 = this.add
            .sprite(600, 450, "lilypad")
            .setScale(0.4)
            .setAngle(150)
            .setInteractive();
        this.l2 = this.add
            .sprite(800, 300, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive();
        this.l3 = this.add
            .sprite(280, 150, "lilypad")
            .setScale(0.4)
            .setAngle(45)
            .setInteractive();
        this.l4 = this.add
            .sprite(430, 300, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive();
        this.l5 = this.add
            .sprite(600, 150, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive();
        this.l6 = this.add
            .sprite(900, 500, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive();

        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2);
        kid.setScale(1);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 1", {
                color: "#000000",
                fontSize: "40px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(250, 270, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(430, 110, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(910, 180, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(340, 320, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(515, 380, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(750, 480, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(380, 190, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(500, 200, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(730, 195, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(620, 260, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(705, 330, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(880, 390, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(950, 280, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.input.keyboard?.createCursorKeys();
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.scoreText = this.add.text(16, 16, "Path Length: " + this.score, {
            fontSize: "45px",
            color: "#000",
            fontStyle: "bold",
        });
    }

    update() {}
}
