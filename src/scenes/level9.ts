import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level9 extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;
    private mom?: Phaser.Physics.Arcade.StaticGroup;
    private scoreText?: Phaser.GameObjects.Text;
    private failPopup!: Phaser.GameObjects.Container;
    private passPopup!: Phaser.GameObjects.Container;
    private kid!: Phaser.GameObjects.Image;
    private isMuted: boolean = true;
    private muteButton!: Phaser.GameObjects.Text;
    private instructions: Instructions;

    constructor() {
        super({ key: "Level9" });
    }

    create() {
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "frogBackground"
        );
        this.muteButton = this.add
            .text(this.cameras.main.width - 80, 100, "Mute", {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            })
            .setInteractive();
        this.muteButton.on("pointerdown", () => {
            this.toggleMute();
        });
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
            this.scene.start("Level9");
        });

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

        graphics.beginPath();
        graphics.moveTo(235, 415);
        graphics.lineTo(200, 125);
        graphics.lineTo(200, 125);
        graphics.lineTo(500, 125);
        graphics.lineTo(500, 125);
        graphics.lineTo(800, 125);
        graphics.lineTo(800, 125);
        graphics.lineTo(1000, 150);
        graphics.lineTo(1000, 150);
        graphics.lineTo(1100, 350);
        graphics.lineTo(1100, 350);
        graphics.lineTo(870, 370);
        graphics.lineTo(870, 370);
        graphics.lineTo(680, 550);
        graphics.lineTo(680, 550);
        graphics.lineTo(650, 300);
        graphics.lineTo(650, 300);
        graphics.lineTo(420, 330);
        graphics.lineTo(420, 330);
        graphics.lineTo(235, 415);
        graphics.lineTo(680, 550);
        graphics.lineTo(420, 330);
        graphics.lineTo(420, 330);
        graphics.lineTo(200, 125);
        graphics.lineTo(420, 330);
        graphics.lineTo(500, 125);
        graphics.lineTo(650, 300);
        graphics.lineTo(800, 125);
        graphics.lineTo(650, 300);
        graphics.lineTo(1000, 150);
        graphics.lineTo(650, 300);
        graphics.lineTo(870, 370);
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
                if (kid.x == 1100) {
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
                if (this.score == 12) {
                    image.setTint(0x00ff00);
                    this.showPassPopup();
                }
            });
        kid.setScale(1);

        let l1 = this.add
            .image(200, 125, "lilypad")
            .setScale(0.4)
            .setAngle(150)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 5;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                } else if (kid.x == 420) {
                    this.score += 9;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                } else if (kid.x == 500) {
                    this.score += 12;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l1.setScale(0.5))
            .on("pointerout", () => l1.setScale(0.4));

        let l2 = this.add
            .image(500, 125, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 800) {
                    this.score += 9;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                } else if (kid.x == 200) {
                    this.score += 12;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                } else if (kid.x == 420) {
                    this.score += 8;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                } else if (kid.x == 650) {
                    this.score += 10;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l2.setScale(0.5))
            .on("pointerout", () => l2.setScale(0.4));

        let l3 = this.add
            .image(800, 125, "lilypad")
            .setScale(0.4)
            .setAngle(45)
            .setInteractive()
            .setDepth(0)
            .on("pointerdown", () => {
                if (kid.x == 500) {
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                    this.score += 9;
                } else if (kid.x == 650) {
                    this.score += 8;
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                } else if (kid.x == 1000) {
                    this.score += 9;
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l3.setScale(0.5))
            .on("pointerout", () => l3.setScale(0.4));

        let l4 = this.add
            .image(420, 330, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 200) {
                    this.score += 9;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                } else if (kid.x == 500) {
                    this.score += 8;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                } else if (kid.x == 235) {
                    this.score += 7;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                } else if (kid.x == 680) {
                    this.score += 1;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                } else if (kid.x == 650) {
                    this.score += 3;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l4.setScale(0.5))
            .on("pointerout", () => l4.setScale(0.4));

        let l5 = this.add
            .image(870, 370, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 650) {
                    this.score += 4;
                    kid.setX(l5.x).setY(l5.y).setDepth(1);
                } else if (kid.x == 1100) {
                    this.score += 3;
                    kid.setX(l5.x).setY(l5.y).setDepth(1);
                } else if (kid.x == 680) {
                    this.score += 9;
                    kid.setX(l5.x).setY(l5.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l5.setScale(0.5))
            .on("pointerout", () => l5.setScale(0.4));

        let l6 = this.add
            .image(680, 550, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 870) {
                    this.score += 9;
                    kid.setX(l6.x).setY(l6.y).setDepth(1);
                } else if (kid.x == 650) {
                    this.score += 1;
                    kid.setX(l6.x).setY(l6.y).setDepth(1);
                } else if (kid.x == 420) {
                    this.score += 1;
                    kid.setX(l6.x).setY(l6.y).setDepth(1);
                } else if (kid.x == 235) {
                    this.score += 2;
                    kid.setX(l6.x).setY(l6.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })

            .on("pointerover", () => l6.setScale(0.5))
            .on("pointerout", () => l6.setScale(0.4));
        let l7 = this.add
            .image(1100, 350, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 1000) {
                    this.score += 2;
                    kid.setX(l7.x).setY(l7.y).setDepth(1);
                } else if (kid.x == 870) {
                    this.score += 3;
                    kid.setX(l7.x).setY(l7.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })

            .on("pointerover", () => l7.setScale(0.5))
            .on("pointerout", () => l7.setScale(0.4));
        let l8 = this.add
            .image(650, 300, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 680) {
                    this.score += 1;
                    kid.setX(l8.x).setY(l8.y).setDepth(1);
                } else if (kid.x == 870) {
                    this.score += 4;
                    kid.setX(l8.x).setY(l8.y).setDepth(1);
                } else if (kid.x == 1000) {
                    this.score += 10;
                    kid.setX(l8.x).setY(l8.y).setDepth(1);
                } else if (kid.x == 800) {
                    this.score += 8;
                    kid.setX(l8.x).setY(l8.y).setDepth(1);
                } else if (kid.x == 500) {
                    this.score += 10;
                    kid.setX(l8.x).setY(l8.y).setDepth(1);
                } else if (kid.x == 420) {
                    this.score += 3;
                    kid.setX(l8.x).setY(l8.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })

            .on("pointerover", () => l8.setScale(0.5))
            .on("pointerout", () => l8.setScale(0.4));
        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 9", {
                color: "#000000",
                fontSize: "40px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(250, 270, "5", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(360, 90, "12", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(650, 90, "9", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(915, 100, "9", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(1080, 220, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(980, 380, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(820, 460, "9", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(410, 480, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(570, 320, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(520, 420, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(695, 410, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(770, 300, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(880, 210, "10", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(720, 190, "8", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(605, 180, "10", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(450, 190, "8", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(345, 210, "9", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(315, 350, "7", {
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
        this.instructions = new Instructions(this, 100, 200);
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
            this.cameras.main.height / 2 + 50,
            "Unfortunately, you did not reunite the baby frog with its mother along the shortest path.\n\n" +
                "Don't be discouraged, try again!\n\n" +
                "Let's hop to it!",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 500 },
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
            this.scene.start("Level9");
        });
        const sadMom = this.add
            .image(
                this.cameras.main.width / 2 - 100,
                this.cameras.main.height / 2 - 180,
                "lose"
            )
            .setScale(2);
        const sadKid = this.add.image(
            this.cameras.main.width / 2 + 100,
            this.cameras.main.height / 2 - 160,
            "lose"
        );

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(failText);
        popup.add(closeButton);
        popup.add(sadMom);
        popup.add(sadKid);
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
            this.cameras.main.height / 2 + 50,
            "Congratulations! \n\nYou united the baby frog with its mother along the shortest path!\n\n" +
                "One more level to go! The baby frog is almost back with his mother for good!\n\n" +
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
            this.cameras.main.height / 2 + 260,
            "Level 10",
            {
                color: "#000",
                fontSize: "30px",
                fontStyle: "bold",
            }
        );
        closeButton.setOrigin(0.5);
        closeButton.setInteractive();
        closeButton.on("pointerdown", () => {
            this.score = 0;
            this.scene.start("Level10");
        });
        const happyMom = this.add
            .image(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2 - 180,
                "win"
            )
            .setScale(2);
        const happyKid = this.add.image(
            this.cameras.main.width / 2 + 30,
            this.cameras.main.height / 2 - 160,
            "win"
        );

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(PassText);
        popup.add(closeButton);
        popup.add(happyMom);
        popup.add(happyKid);
        return popup;
    }
    private showPassPopup(): void {
        this.passPopup.setVisible(true);
    }
    private hidePassPopup(): void {
        this.passPopup.setVisible(false);
    }
    toggleMute() {
        this.isMuted = !this.isMuted;
        this.game.sound.mute = this.isMuted;
    }
    update() {}
}
