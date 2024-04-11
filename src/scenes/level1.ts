// import { Linter } from "eslint";
import Phaser from "phaser";

export default class Level1 extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    private failPopup!: Phaser.GameObjects.Container;
    private passPopup!: Phaser.GameObjects.Container;
    private kid!: Phaser.GameObjects.Image;
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
        graphics.lineTo(500, 200);
        graphics.lineTo(1000, 150);
        graphics.lineTo(650, 450);
        graphics.lineTo(500, 200);
        graphics.lineTo(650, 450);
        graphics.lineTo(235, 415);
        graphics.strokePath();

        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 500) {
                    this.score += 1;
                    kid.setX(mom.x + 10)
                        .setY(mom.y + 10)
                        .setDepth(1);
                }
                if (kid.x == 650) {
                    this.score += 2;
                    kid.setX(mom.x + 10)
                        .setY(mom.y + 10)
                        .setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
                if (this.score > 3) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                } else if (this.score == 3) {
                    ///// why doesnt this work //  this.showPassPopup();

                    this.scene.start("Level2");
                }
            });
        kid.setScale(1);

        let l1 = this.add
            .image(500, 200, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 2;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }
                if (kid.x == 650) {
                    this.score += 3;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }

                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l1.setScale(0.5))
            .on("pointerout", () => l1.setScale(0.4));

        let l2 = this.add
            .image(650, 450, "lilypad")
            .setScale(0.4)
            .setAngle(45)
            .setInteractive()
            .setDepth(0)
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                    this.score += 3;
                }
                if (kid.x == 500) {
                    this.score += 3;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }

                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l2.setScale(0.5))
            .on("pointerout", () => l2.setScale(0.4));

        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 1", {
                color: "#000000",
                fontSize: "40px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        const restart = this.add.text(1260, 60, "Restart", {
            color: "#000",
            fontSize: "35px",
            fontStyle: "bold",
        });
        restart.setOrigin(1, 0).setInteractive();
        restart.on("pointerdown", () => {
            this.score = 0;
            this.scene.start("Level1");
        });

        this.add
            .text(380, 270, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(440, 400, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(593, 290, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(780, 140, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(800, 290, "2", {
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
    private createFailPopup(): Phaser.GameObjects.Container {
        const background = this.add
            .rectangle(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                800,
                600,
                0xadd8e6
            )
            .setDepth(1);
        const failText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "Unfortunately, you did not reunite the baby frog with its mother along the shortest path.\n" +
                "Don't be discouraged, try again!\n" +
                "Let's hop to it!",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 350 },
            }
        );
        failText.setOrigin(0.5);
        //close button
        const closeButton = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2 + 280,
            "Retry",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );
        closeButton.setOrigin(0.5);
        closeButton.setInteractive();
        closeButton.on("pointerdown", () => {
            this.score = 0;
            this.scene.start("Level1");
        });

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(failText);
        popup.add(closeButton);
        return popup;
    }
    private showFailPopup(): void {
        this.failPopup.setVisible(true);
    }
    private hideFailPopup(): void {
        this.failPopup.setVisible(false);
    }
    private createPassPopup(): Phaser.GameObjects.Container {
        const background = this.add
            .rectangle(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                800,
                600,
                0xadd8e6
            )
            .setDepth(1);
        const PassText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "Congratulation! You united the baby frog with its mother along the shortest path!\n" +
                "Ready for more of a challenge? Try the next level!\n" +
                "Let's hop to it!",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 350 },
            }
        );
        PassText.setOrigin(0.5);
        const closeButton = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2 + 280,
            "Level 2",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );
        closeButton.setOrigin(0.5);
        closeButton.setInteractive();
        closeButton.on("pointerdown", () => {
            this.score = 0;
            this.scene.start("Level2");
        });

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(PassText);
        popup.add(closeButton);
        return popup;
    }
    private showPassPopup(): void {
        this.failPopup.setVisible(true);
    }
    private hidePassPopup(): void {
        this.failPopup.setVisible(false);
    }

    update() {}
}
