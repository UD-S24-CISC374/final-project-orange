import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level6 extends Phaser.Scene {
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
        super({ key: "Level6" });
    }

    create() {
        const ribbit = this.sound.add("ribbit", { loop: false });

        const splash = this.sound.add("splash2", { loop: false });
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
            this.scene.start("Level6");
        });

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

        graphics.beginPath();
        graphics.moveTo(235, 415);
        graphics.lineTo(350, 150);
        graphics.lineTo(235, 415);
        graphics.lineTo(475, 550);
        graphics.lineTo(350, 150);
        graphics.lineTo(600, 150);
        graphics.lineTo(600, 150);
        graphics.lineTo(825, 150);
        graphics.lineTo(825, 150);
        graphics.lineTo(1000, 150);
        graphics.lineTo(980, 350);
        graphics.lineTo(980, 350);
        graphics.lineTo(900, 550);
        graphics.lineTo(900, 550);
        graphics.lineTo(700, 550);
        graphics.lineTo(700, 550);
        graphics.lineTo(475, 550);
        graphics.lineTo(600, 150);
        graphics.lineTo(600, 150);
        graphics.lineTo(700, 550);
        graphics.lineTo(700, 550);
        graphics.lineTo(825, 150);
        graphics.lineTo(900, 550);

        graphics.strokePath();

        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 825) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    ribbit.play();
                    kid.setDepth(1);
                }
                if (kid.x == 980) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    ribbit.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
                if (this.score > 9) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                }
                if (this.score == 9) {
                    image.setTint(0x00ff00);
                    this.showPassPopup();
                }
            });
        kid.setScale(1);

        let l1 = this.add
            .image(350, 150, "lilypad")
            .setScale(0.4)
            .setAngle(150)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 600) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 475) {
                    this.score += 5;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l1.setScale(0.5))
            .on("pointerout", () => l1.setScale(0.4));

        let l2 = this.add
            .image(600, 150, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 350) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 825) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 475) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 700) {
                    this.score += 6;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l2.setScale(0.5))
            .on("pointerout", () => l2.setScale(0.4));

        let l3 = this.add
            .image(825, 150, "lilypad")
            .setScale(0.4)
            .setAngle(45)
            .setInteractive()
            .setDepth(0)
            .on("pointerdown", () => {
                if (kid.x == 600) {
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                    this.score += 4;
                } else if (kid.x == 1000) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 700) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 900) {
                    this.score += 5;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l3.setScale(0.5))
            .on("pointerout", () => l3.setScale(0.4));

        let l4 = this.add
            .image(475, 550, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 700) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 350) {
                    this.score += 5;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 600) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l4.setScale(0.5))
            .on("pointerout", () => l4.setScale(0.4));

        let l5 = this.add
            .image(700, 550, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 475) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 900) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 600) {
                    this.score += 6;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 825) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l5.setScale(0.5))
            .on("pointerout", () => l5.setScale(0.4));

        let l6 = this.add
            .image(900, 550, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 700) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l6.x },
                        y: { from: kid.y, to: l6.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 980) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l6.x },
                        y: { from: kid.y, to: l6.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 825) {
                    this.score += 5;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l6.x },
                        y: { from: kid.y, to: l6.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })

            .on("pointerover", () => l6.setScale(0.5))
            .on("pointerout", () => l6.setScale(0.4));
        let l7 = this.add
            .image(980, 350, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 900) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l7.x },
                        y: { from: kid.y, to: l7.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                } else if (kid.x == 1000) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l7.x },
                        y: { from: kid.y, to: l7.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
            })

            .on("pointerover", () => l7.setScale(0.5))
            .on("pointerout", () => l7.setScale(0.4));
        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 6", {
                color: "#000000",
                fontSize: "40px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(270, 280, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(320, 480, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(390, 320, "5", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(490, 110, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(530, 320, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(640, 320, "6", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(750, 320, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(860, 320, "5", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(980, 450, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(1030, 210, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(930, 110, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(700, 110, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(800, 560, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(587, 560, "1", {
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
            this.scene.start("Level6");
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
                "Nothing can stump you! Check out the next level!\n\n" +
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
            "Level 7",
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
            this.scene.start("Level7");
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
        const reunite = this.sound.add("reuniting");
        reunite.play();
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
