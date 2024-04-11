import Phaser from "phaser";

export default class Level3 extends Phaser.Scene {
    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    private failPopup!: Phaser.GameObjects.Container;
    private passPopup!: Phaser.GameObjects.Container;
    constructor() {
        super({ key: "Level3" });
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
        const restart = this.add.text(1260, 60, "Restart", {
            color: "#000",
            fontSize: "35px",
            fontStyle: "bold",
        });
        restart.setOrigin(1, 0).setInteractive();
        restart.on("pointerdown", () => {
            this.score = 0;
            this.scene.start("Level3");
        });

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

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

        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 800) {
                    this.score += 1;
                    kid.setX(mom.x + 10)
                        .setY(mom.y + 10)
                        .setDepth(1);
                }
                if (kid.x == 900) {
                    this.score += 2;
                    kid.setX(mom.x + 10)
                        .setY(mom.y + 10)
                        .setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
                if (this.score > 4) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                }
                if (this.score == 4) {
                    this.showPassPopup();
                }
            });
        kid.setScale(1);

        let l1 = this.add
            .image(600, 450, "lilypad")
            .setScale(0.4)
            .setAngle(150)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 430) {
                    this.score += 2;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 1;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }
                if (kid.x == 900) {
                    this.score += 3;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                } else {
                    //  l1.setTint(0xff00ff);
                    // l1.clearTint();
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l1.setScale(0.5))
            .on("pointerout", () => l1.setScale(0.4));

        let l2 = this.add
            .image(800, 300, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 600 && kid.y == 150) {
                    this.score += 3;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                if (kid.x == 600 && kid.y == 450) {
                    this.score += 1;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                if (kid.x == 430) {
                    this.score += 1;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                if (kid.x == 900) {
                    this.score += 1;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l2.setScale(0.5))
            .on("pointerout", () => l2.setScale(0.4));
        let l3 = this.add
            .image(280, 150, "lilypad")
            .setScale(0.4)
            .setAngle(45)
            .setInteractive()
            .setDepth(0)
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                    this.score += 1;
                }
                if (kid.x == 430) {
                    this.score += 1;
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                }
                if (kid.x == 600 && kid.y == 150) {
                    this.score += 2;
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l3.setScale(0.5))
            .on("pointerout", () => l3.setScale(0.4));
        let l4 = this.add
            .image(430, 300, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 4;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 280) {
                    this.score += 1;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 600 && kid.y == 150) {
                    this.score += 2;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 600 && kid.y == 450) {
                    this.score += 2;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 1;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l4.setScale(0.5))
            .on("pointerout", () => l4.setScale(0.4));
        let l5 = this.add
            .image(600, 150, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 280) {
                    this.score += 2;
                    kid.setX(l5.x).setY(l5.y).setDepth(1);
                }
                if (kid.x == 430) {
                    this.score += 2;
                    kid.setX(l5.x).setY(l5.y).setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 3;
                    kid.setX(l5.x).setY(l5.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l5.setScale(0.5))
            .on("pointerout", () => l5.setScale(0.4));
        let l6 = this.add
            .image(900, 500, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 600 && kid.y == 450) {
                    this.score += 3;
                    kid.setX(l6.x).setY(l6.y).setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 1;
                    kid.setX(l6.x).setY(l6.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })

            .on("pointerover", () => l6.setScale(0.5))
            .on("pointerout", () => l6.setScale(0.4));

        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 3", {
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
            this.scene.start("Level3");
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
            "Congratulations! You united the baby frog with its mother along the shortest path!\n" +
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
        //close button
        const closeButton = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2 + 280,
            "Level 4",
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
            this.scene.start("Level4");
        });

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(PassText);
        popup.add(closeButton);
        return popup;
    }
    private showPassPopup(): void {
        this.passPopup.setVisible(true);
    }
    private hidePassPopup(): void {
        this.passPopup.setVisible(false);
    }

    update() {}
}
