import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level5 extends Phaser.Scene {
    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;
    private failPopup!: Phaser.GameObjects.Container;
    private passPopup!: Phaser.GameObjects.Container;
    private isMuted: boolean = true;
    private muteButton!: Phaser.GameObjects.Text;
    private instructions: Instructions;

    constructor() {
        super({ key: "Level5" });
    }

    create() {
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
            this.scene.start("Level5");
        });

        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0x000000);

        graphics.beginPath();
        graphics.moveTo(600, 575);
        graphics.lineTo(235, 415);
        graphics.lineTo(280, 190);
        graphics.lineTo(620, 120);
        graphics.lineTo(440, 350);
        graphics.lineTo(280, 190);
        graphics.lineTo(440, 350);
        graphics.lineTo(235, 415);
        graphics.lineTo(440, 350);
        graphics.lineTo(600, 575);
        graphics.lineTo(780, 340);
        graphics.lineTo(440, 350);
        graphics.lineTo(620, 120);
        graphics.lineTo(780, 340);
        graphics.lineTo(990, 400);
        graphics.lineTo(600, 575);
        graphics.lineTo(780, 340);
        graphics.lineTo(1000, 150);
        graphics.lineTo(620, 120);
        graphics.lineTo(1000, 150);
        graphics.lineTo(990, 400);
        graphics.strokePath();

        let kid = this.add.image(235, 415, "froghappy");
        let mom = this.add.image(1000, 150, "froghappy");
        mom.setScale(2)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 780) {
                    this.score += 8;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 990) {
                    this.score += 6;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 620) {
                    this.score += 4;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                this.scoreText?.setText("Path Length: " + this.score);
                if (this.score > 12) {
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
            .image(600, 575, "lilypad")
            .setScale(0.4)
            .setAngle(60)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 440) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 780) {
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
                if (kid.x == 990) {
                    this.score += 7;
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
            .image(780, 340, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 600) {
                    this.score += 5;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 620) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 440) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l2.x },
                        y: { from: kid.y, to: l2.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 990) {
                    this.score += 2;
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
            .image(280, 190, "lilypad")
            .setScale(0.4)
            .setAngle(180)
            .setInteractive()
            .setDepth(0)
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                    this.score += 4;
                }
                if (kid.x == 440) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 620) {
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
            .image(440, 350, "lilypad")
            .setScale(0.4)
            .setAngle(240)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
                    this.score += 8;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 280) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 620) {
                    this.score += 7;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 600) {
                    this.score += 2;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l4.x },
                        y: { from: kid.y, to: l4.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 780) {
                    this.score += 1;
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
            .image(620, 120, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 280) {
                    this.score += 5;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 440) {
                    this.score += 7;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l5.x },
                        y: { from: kid.y, to: l5.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 780) {
                    this.score += 3;
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
            .image(990, 400, "lilypad")
            .setScale(0.4)
            .setAngle(300)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 600) {
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
                if (kid.x == 780) {
                    this.score += 2;
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

        this.failPopup = this.createFailPopup();
        this.failPopup.setVisible(false);
        this.passPopup = this.createPassPopup();
        this.passPopup.setVisible(false);
        this.add
            .text(this.cameras.main.width - 15, 15, "Level 5", {
                color: "#000000",
                fontSize: "40px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(250, 280, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(440, 120, "5", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(800, 100, "4", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(400, 490, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(900, 200, "8", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);

        this.add
            .text(340, 350, "8", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(550, 430, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(810, 490, "7", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(390, 240, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(510, 220, "7", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(720, 195, "3", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(620, 310, "1", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(680, 430, "5", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(890, 330, "2", {
                color: "#000",
                fontSize: "35px",
                fontStyle: "bold",
            })
            .setOrigin(1, 0);
        this.add
            .text(980, 270, "6", {
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
                "Here's a hint, you will have to visit 4 lilypads in addition to the starting and ending lilypads.\n\n" +
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
            this.scene.start("Level5");
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
                "You made it halfway through the levels! Prepare yourself for more challenging levels ahead!\n\n" +
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
            "Level 6",
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
            this.scene.start("Level6");
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
