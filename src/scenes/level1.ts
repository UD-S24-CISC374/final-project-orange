// import { Linter } from "eslint";
import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level1 extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    private failPopup!: Phaser.GameObjects.Container;
    private passPopup!: Phaser.GameObjects.Container;
    private hintPopup!: Phaser.GameObjects.Container;
    private kid!: Phaser.GameObjects.Sprite;
    private isMuted: boolean = true;
    private muteButton!: Phaser.GameObjects.Text;
    private instructions: Instructions;
    constructor() {
        super({ key: "Level1" });
    }

    create() {
        const ribbit = this.sound.add("ribbit", { loop: false });
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "frogBackground"
        );
        const splash = this.sound.add("splash2", { loop: false });

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

        graphics.beginPath();
        graphics.moveTo(235, 415);
        graphics.lineTo(500, 200);
        graphics.lineTo(1000, 150);
        graphics.lineTo(650, 450);
        graphics.lineTo(500, 200);
        graphics.lineTo(650, 450);
        graphics.lineTo(235, 415);
        graphics.strokePath();
        // const splash = this.sound.add("splash2", { loop: false });

        let kid = this.add.sprite(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2)
            .setInteractive()
            .on("pointerdown", () => {
                ribbit.play();
                if (kid.x == 500) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                }
                if (kid.x == 650) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                }
                this.scoreText?.setText("Path Length: " + this.score);
                if (this.score > 3) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                } else if (this.score == 3) {
                    image.setTint(0x00ff00);
                    this.showPassPopup();
                }
            });
        kid.setScale(1);
        if (kid.x == mom.x) {
            if (this.score > 3) {
                image.setTint(0xff0000);
                this.showFailPopup();
            } else if (this.score == 3) {
                image.setTint(0x00ff00);
                this.showPassPopup();
            }
        }

        let l1 = this.add
            .image(500, 200, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                this.tweens.add({
                    targets: [kid],
                    x: { from: kid.x, to: l1.x },
                    y: { from: kid.y, to: l1.y },
                    duration: 500,
                });
                splash.play();
                kid.setDepth(1);
                if (kid.x == 235) {
                    this.score += 2;
                }
                if (kid.x == 650) {
                    this.hideHintPopup();
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                }

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
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    this.score += 3;
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 500) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                }
                ////////////////////////////////////////////
                this.showHintPopup();

                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l2.setScale(0.5))
            .on("pointerout", () => l2.setScale(0.4));

        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.hintPopup = this.createHintPopup();
        this.hintPopup.setVisible(false);
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
                "Remember, Dijkstra's algortihm is useful to find the shortest distance from start to end! On your first move, think about which path has the smaller number and continue from there! \n\n" +
                "Don't be discouraged, try again!\n\n",
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
                "Got the hang of it? Try something more challening!\n\n" +
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
            "Level 2",
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
            this.scene.start("Level2");
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

    ///////////////////////////////////////////
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
            "Any moves to this lilypad will result in a longer path.\n\nFrom the starting point, moving here instead of the above lilypad adds unnecesary cost. \n\n",
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
            this.scene.start("Level1");
            this.score = 0;
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
    toggleMute() {
        this.isMuted = !this.isMuted;
        this.game.sound.mute = this.isMuted;
    }

    update() {}
}
