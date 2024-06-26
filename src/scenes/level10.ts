import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level10 extends Phaser.Scene {
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
        super({ key: "Level10" });
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
            this.scene.start("Level10");
        });

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

        graphics.beginPath();
        graphics.moveTo(235, 415);
        graphics.lineTo(280, 180);
        graphics.lineTo(500, 320);
        graphics.lineTo(450, 570);
        graphics.lineTo(235, 415);
        graphics.lineTo(280, 180);
        graphics.lineTo(480, 120);
        graphics.lineTo(500, 320);
        graphics.lineTo(630, 480);
        graphics.lineTo(500, 320);
        graphics.lineTo(740, 360);
        graphics.lineTo(630, 480);
        graphics.lineTo(450, 570);
        graphics.lineTo(880, 580);
        graphics.lineTo(630, 480);
        graphics.lineTo(960, 350);
        graphics.lineTo(880, 580);
        graphics.lineTo(960, 350);
        graphics.lineTo(740, 360);
        graphics.lineTo(770, 160);
        graphics.lineTo(960, 350);
        graphics.lineTo(770, 160);
        graphics.lineTo(480, 120);
        graphics.lineTo(770, 160);
        graphics.lineTo(1000, 150);
        graphics.lineTo(960, 350);
        graphics.strokePath();

        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 770) {
                    this.score += 13;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    ribbit.play();
                    kid.setDepth(1);
                }
                if (kid.x == 960) {
                    this.score += 15;
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
                if (this.score > 69) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                }
                if (this.score == 69) {
                    image.setTint(0x00ff00);
                    this.showPassPopup();
                }
            });
        kid.setScale(1);

        let l1 = this.add
            .image(280, 180, "lilypad")
            .setScale(0.4)
            .setAngle(150)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 23;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 500) {
                    this.score += 9;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 480) {
                    this.score += 17;
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
            .image(450, 570, "lilypad")
            .setScale(0.4)
            .setAngle(300)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 18;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 500) {
                    this.score += 11;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 630) {
                    this.score += 18;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 880) {
                    this.score += 12;
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
            .image(480, 120, "lilypad")
            .setScale(0.4)
            .setAngle(170)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 280) {
                    this.score += 17;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 500) {
                    this.score += 9;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 770) {
                    this.score += 19;
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
            .image(500, 320, "lilypad")
            .setScale(0.4)
            .setAngle(200)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 280) {
                    this.score += 9;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 450) {
                    this.score += 11;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 480) {
                    this.score += 9;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 630) {
                    this.score += 11;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 740) {
                    this.score += 11;
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
            .image(630, 480, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 450) {
                    this.score += 18;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 500) {
                    this.score += 11;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 740) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 960) {
                    this.score += 19;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 880) {
                    this.score += 8;
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
            .image(770, 160, "lilypad")
            .setScale(0.4)
            .setAngle(90)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 480) {
                    this.score += 19;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l6.x },
                        y: { from: kid.y, to: l6.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 740) {
                    this.score += 21;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l6.x },
                        y: { from: kid.y, to: l6.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 960) {
                    this.score += 7;
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
            .image(740, 360, "lilypad")
            .setScale(0.4)
            .setAngle(40)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 500) {
                    this.score += 11;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l7.x },
                        y: { from: kid.y, to: l7.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 630) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l7.x },
                        y: { from: kid.y, to: l7.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 770) {
                    this.score += 21;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l7.x },
                        y: { from: kid.y, to: l7.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 960) {
                    this.score += 16;
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

        let l8 = this.add
            .image(960, 350, "lilypad")
            .setScale(0.4)
            .setAngle(110)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 770) {
                    this.score += 7;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l8.x },
                        y: { from: kid.y, to: l8.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 740) {
                    this.score += 16;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l8.x },
                        y: { from: kid.y, to: l8.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 630) {
                    this.score += 19;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l8.x },
                        y: { from: kid.y, to: l8.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 880) {
                    this.score += 25;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l8.x },
                        y: { from: kid.y, to: l8.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }

                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l8.setScale(0.5))
            .on("pointerout", () => l8.setScale(0.4));

        let l9 = this.add
            .image(880, 580, "lilypad")
            .setScale(0.4)
            .setAngle(150)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 450) {
                    this.score += 12;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l9.x },
                        y: { from: kid.y, to: l9.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 463) {
                    this.score += 8;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l9.x },
                        y: { from: kid.y, to: l9.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 960) {
                    this.score += 25;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l9.x },
                        y: { from: kid.y, to: l9.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }

                this.scoreText?.setText("Path Length: " + this.score);
            })
            .on("pointerover", () => l9.setScale(0.5))
            .on("pointerout", () => l9.setScale(0.4));

        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 10", {
                color: "#000000",
                fontSize: "40px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(250, 270, "23", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(410, 110, "17", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(420, 220, "9", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(480, 200, "9", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(370, 450, "18", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(470, 420, "11", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(550, 490, "18", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(700, 580, "12", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(650, 100, "19", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(650, 310, "11", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(610, 370, "11", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(680, 400, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(820, 420, "19", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(780, 500, "8", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(860, 325, "16", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(755, 220, "21", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(880, 228, "7", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(910, 120, "13", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(985, 200, "15", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(975, 440, "25", {
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
                "Focus on the bigger picture here. The shortest path could be that you have to pick some larger numbers over smaller ones. Think everything through fully!\n\n" +
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
            this.scene.start("Level10");
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
            "Nice hopping!\n\nYou united the baby frog with its mother along the shortest path and completed the game!\n\n" +
                "Want to play again?\n\n",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 500 },
            }
        );
        PassText.setOrigin(0.5);
        //close button
        const closeButton = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2 + 260,
            "Level 1",
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
            this.scene.start("Level1");
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
