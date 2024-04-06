// import { Linter } from "eslint";
import Phaser from "phaser";

export default class Level1 extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private kid?: Phaser.Physics.Arcade.StaticGroup;
    private mom?: Phaser.Physics.Arcade.StaticGroup;
    private lilypads?: Phaser.Physics.Arcade.StaticGroup;
    private line1?: Phaser.Geom.Line;

    // private score: number = 0;
    // private scoreText?: Phaser.GameObjects.Text;
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
        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x0000ea);

        //  PATH
        graphics.beginPath();
        graphics.moveTo(235, 415);
        graphics.lineTo(280, 150);
        graphics.lineTo(600, 150);
        graphics.lineTo(400, 300);
        graphics.lineTo(280, 150);
        graphics.lineTo(400, 300);
        graphics.lineTo(235, 415);
        graphics.lineTo(400, 300);
        graphics.lineTo(600, 450);
        graphics.lineTo(800, 300);
        graphics.lineTo(400, 300);
        graphics.lineTo(600, 150);
        graphics.lineTo(800, 300);
        graphics.lineTo(900, 500);
        graphics.lineTo(600, 450);
        graphics.lineTo(800, 300);
        graphics.lineTo(1000, 150);
        graphics.lineTo(900, 500);
        graphics.strokePath();

        this.lilypads = this.physics.add.staticGroup();
        const pads = this.lilypads.create(
            600,
            450,
            "lilypad"
        ) as Phaser.Physics.Arcade.Sprite;
        pads.setScale(0.5).refreshBody();

        this.lilypads.create(800, 300, "lilypad").setScale(0.5).refreshBody();
        this.lilypads.create(280, 150, "lilypad").setScale(0.5).refreshBody();
        this.lilypads.create(400, 300, "lilypad").setScale(0.5).refreshBody();
        this.lilypads.create(600, 150, "lilypad").setScale(0.5).refreshBody();
        this.lilypads.create(900, 500, "lilypad").setScale(0.5).refreshBody();

        mom.setScale(2);
        kid.setScale(1);
        const message = `Level 1`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "40px",
            })
            .setOrigin(1, 0);

        this.input.keyboard?.createCursorKeys();
        this.cursors = this.input.keyboard?.createCursorKeys();
        // this.scoreText = this.add.text(16, 16, "Score: " + this.score, {
        //     fontSize: "32px",
        //     color: "#000",
        // });
    }

    update() {}
}
