// import { Linter } from "eslint";
import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level2 extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    private failPopup!: Phaser.GameObjects.Container;
    private passPopup!: Phaser.GameObjects.Container;
    private hintPopup!: Phaser.GameObjects.Container;
    private hint2Popup!: Phaser.GameObjects.Container;
    private kid!: Phaser.GameObjects.Image;
    private isMuted: boolean = true;
    private muteButton!: Phaser.GameObjects.Text;
    private instructions: Instructions;

    constructor() {
        super({ key: "Level2" });
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

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

        //  PATH
        graphics.beginPath();
        graphics.lineTo(530, 400);
        graphics.lineTo(235, 415);
        graphics.lineTo(380, 150);
        graphics.lineTo(530, 400);
        graphics.lineTo(720, 200);
        graphics.lineTo(380, 150);
        graphics.lineTo(530, 400);
        graphics.lineTo(800, 500);
        graphics.lineTo(1000, 150);
        graphics.lineTo(720, 200);
        graphics.lineTo(800, 500);
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
                if (kid.x == 720) {
                    this.score += 2;
                    kid.setX(mom.x + 10)
                        .setY(mom.y + 10)
                        .setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
                if (this.score > 6) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                } else if (this.score == 6) {
                    image.setTint(0x00ff00);
                    this.showPassPopup();
                }
            });
        kid.setScale(1);

        let l1 = this.add
            .image(800, 500, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 530) {
                    this.score += 3;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }
                if (kid.x == 720) {
                    this.score += 2;
                    kid.setX(l1.x).setY(l1.y).setDepth(1);
                }

                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l1.setScale(0.5))
            .on("pointerout", () => l1.setScale(0.4));

        let l2 = this.add
            .image(720, 200, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive()
            .on("pointerdown", () => {
                this.showHint2Popup();
                if (kid.x == 380) {
                    this.score += 4;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                if (kid.x == 530) {
                    this.score += 3;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 2;
                    kid.setX(l2.x).setY(l2.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l2.setScale(0.5))
            .on("pointerout", () => l2.setScale(0.4));

        let l3 = this.add
            .image(380, 150, "lilypad")
            .setScale(0.4)
            .setAngle(45)
            .setInteractive()
            .setDepth(0)
            .on("pointerdown", () => {
                this.showHintPopup();
                if (kid.x == 235) {
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                    this.score += 2;
                }
                if (kid.x == 530) {
                    this.score += 1;
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                }
                if (kid.x == 720) {
                    this.score += 4;
                    kid.setX(l3.x).setY(l3.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l3.setScale(0.5))
            .on("pointerout", () => l3.setScale(0.4));

        let l4 = this.add
            .image(530, 400, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 2;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 380) {
                    this.score += 1;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 720) {
                    this.score += 3;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 3;
                    kid.setX(l4.x).setY(l4.y).setDepth(1);
                }
                console.log("click pad" + this.score);
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l4.setScale(0.5))
            .on("pointerout", () => l4.setScale(0.4));

        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.hintPopup = this.createHintPopup();
        this.hintPopup.setVisible(false);
        this.hint2Popup = this.createHintPopup();
        this.hint2Popup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 2", {
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
            this.scene.start("Level2");
        });

        this.add
            .text(620, 260, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(300, 260, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(380, 370, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(480, 240, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(550, 140, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(680, 420, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(790, 320, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(880, 135, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(940, 300, "1", {
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
                "This level is trickier because on the first move, both paths have the same cost. It might be easier to work backwards on this level and plan out your path before clicking!\n\n" +
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
            this.scene.start("Level2");
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
                "You're doing great!? Ready for more of a challenge?\n\n" +
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
            this.cameras.main.height / 2 + 260,
            "Level 3",
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
            this.scene.start("Level3");
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
    private createHintPopup(): Phaser.GameObjects.Container {
        const background = this.add
            .rectangle(
                this.cameras.main.width / 2 + 300,
                this.cameras.main.height / 2 + 75,
                400,
                320,
                0xadd8e6
            )
            .setDepth(1);
        const hintText = this.add.text(
            this.cameras.main.width / 2 + 300,
            this.cameras.main.height / 2 + 20 + 65,
            "This first move is a tricky one since both paths have a cost of 2. Look a little bit further along the path, only one of the lilypads will lead to the shortest path.\n\n",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 350 },
            }
        );
        hintText.setOrigin(0.5);
        //close button
        const closeButton = this.add.text(
            this.cameras.main.width / 2 + 125,
            this.cameras.main.height / 2 + 120 + 75,
            "Restart",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );
        const continueButton = this.add.text(
            this.cameras.main.width / 2 + 380,
            this.cameras.main.height / 2 + 120 + 90,
            "Continue",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );

        continueButton.setOrigin(0.5);
        continueButton.setInteractive();
        continueButton.on("pointerdown", () => {
            this.hintPopup.setVisible(false);
        });
        closeButton.setInteractive();
        closeButton.on("pointerdown", () => {
            this.scene.start("Level2");
        });

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(hintText);
        popup.add(closeButton);
        popup.add(continueButton);
        return popup;
    }
    private showHintPopup(): void {
        this.hintPopup.setVisible(true);
    }
    private hideHintPopup(): void {
        this.hintPopup.setVisible(false);
    }
    private createHint2Popup(): Phaser.GameObjects.Container {
        const background = this.add
            .rectangle(
                this.cameras.main.width / 2 + 300,
                this.cameras.main.height / 2 + 75,
                400,
                320,
                0xadd8e6
            )
            .setDepth(1);
        const hint2Text = this.add.text(
            this.cameras.main.width / 2 + 300,
            this.cameras.main.height / 2 + 20 + 65,
            "Youre headed down the wrong path and might be doing a different type of graph traversal, not Dijkstra's algorithm. Remember that in the event of a tie between paths, you need to check out both, but only lock in the shortest path!\n\n",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 350 },
            }
        );
        hint2Text.setOrigin(0.5);
        //close button
        const closeButton = this.add.text(
            this.cameras.main.width / 2 + 125,
            this.cameras.main.height / 2 + 120 + 75,
            "Restart",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );
        const continueButton = this.add.text(
            this.cameras.main.width / 2 + 380,
            this.cameras.main.height / 2 + 120 + 90,
            "Continue",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );

        continueButton.setOrigin(0.5);
        continueButton.setInteractive();
        continueButton.on("pointerdown", () => {
            this.hint2Popup.setVisible(false);
        });
        closeButton.setInteractive();
        closeButton.on("pointerdown", () => {
            this.scene.start("Level2");
        });

        const popup = this.add.container();
        popup.add(background).setDepth(1);
        popup.add(hint2Text);
        popup.add(closeButton);
        popup.add(continueButton);
        return popup;
    }
    private showHint2Popup(): void {
        this.hint2Popup.setVisible(true);
    }
    private hideHint2Popup(): void {
        this.hint2Popup.setVisible(false);
    }
    toggleMute() {
        this.isMuted = !this.isMuted;
        this.game.sound.mute = this.isMuted;
    }
    update() {}
}
