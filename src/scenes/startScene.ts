import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super({ key: "StartScene" });
    }

    create() {
        // this.input.keyboard?.createCursorKeys();
        // this.cursors = this.input.keyboard?.createCursorKeys();
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#ffffff",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
    }

    update() {}
}
