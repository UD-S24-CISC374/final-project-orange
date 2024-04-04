import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private kid?: Phaser.Physics.Arcade.StaticGroup;
    private mom?: Phaser.Physics.Arcade.StaticGroup;
    private lilypad?: Phaser.Physics.Arcade.StaticGroup;

    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "frogBackground"
        );
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        this.lilypad = this.physics.add.staticGroup();

        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
        let kid = this.add.image(180, 550, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        let pad = this.add.image(500, 300, "lilypad");
        mom.setScale(2);
        kid.setScale(1);
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        this.input.keyboard?.createCursorKeys();
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.scoreText = this.add.text(16, 16, "Score: " + this.score, {
            fontSize: "32px",
            color: "#000",
        });
    }

    update() {}
}
