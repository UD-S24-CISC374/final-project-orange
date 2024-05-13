import Level1 from "./level1";

export default class lilypad extends Phaser.Scene {
    private instructionsPopup!: Phaser.GameObjects.Container;
    public connectedPaths: Array<lilypad>;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        kid: Phaser.GameObjects.Sprite
    ) {
        super("lilypad");
        console.log(kid);
        let l1 = scene.add
            .image(500, 200, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                scene.tweens.add({
                    targets: [kid],
                    x: { from: kid.x, to: l1.x },
                    y: { from: kid.y, to: l1.y },
                    duration: 500,
                });
                // splash.play();
                kid.setDepth(1);
                if (kid.x == 235) {
                    //     this.score += 2;
                }
                if (kid.x == 650) {
                    //  this.hideHintPopup();
                    // this.score += 3;
                    scene.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                }

                // this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l1.setScale(0.5))
            .on("pointerout", () => l1.setScale(0.4));
    }
}
