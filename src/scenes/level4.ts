import Phaser from "phaser";
import Instructions from "../objects/instructions";

export default class Level4 extends Phaser.Scene {
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
        super({ key: "Level4" });
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
            this.scene.start("Level4");
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
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: mom.x },
                        y: { from: kid.y, to: mom.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 900) {
                    this.score += 2;
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
                if (this.score > 4) {
                    image.setTint(0xff0000);
                    this.showFailPopup();
                }
                if (this.score == 4) {
                    image.setTint(0x00ff00);
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
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l1.x },
                        y: { from: kid.y, to: l1.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 900) {
                    this.score += 3;
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
            .image(800, 300, "lilypad")
            .setScale(0.4)
            .setAngle(100)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 600 && kid.y == 150) {
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
                if (kid.x == 600 && kid.y == 450) {
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
                if (kid.x == 430) {
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
                if (kid.x == 900) {
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
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                    this.score += 1;
                }
                if (kid.x == 430) {
                    this.score += 1;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l3.x },
                        y: { from: kid.y, to: l3.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 600 && kid.y == 150) {
                    this.score += 2;
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
            .image(430, 300, "lilypad")
            .setScale(0.4)
            .setAngle(280)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 235) {
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
                if (kid.x == 280) {
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
                if (kid.x == 600 && kid.y == 150) {
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
                if (kid.x == 600 && kid.y == 450) {
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
                if (kid.x == 800) {
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
            .image(600, 150, "lilypad")
            .setScale(0.4)
            .setAngle(0)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 280) {
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
                if (kid.x == 430) {
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
                if (kid.x == 800) {
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
            .image(900, 500, "lilypad")
            .setScale(0.4)
            .setAngle(230)
            .setInteractive()
            .on("pointerdown", () => {
                if (kid.x == 600 && kid.y == 450) {
                    this.score += 3;
                    this.tweens.add({
                        targets: [kid],
                        x: { from: kid.x, to: l6.x },
                        y: { from: kid.y, to: l6.y },
                        duration: 500,
                    });
                    splash.play();
                    kid.setDepth(1);
                }
                if (kid.x == 800) {
                    this.score += 1;
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
            .text(this.cameras.main.width - 15, 15, "Level 4", {
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
                "A good starting point for this level would be to treat each move as its own thing! When on each lilypad, look at all of the options and choose the path with the smallest cost!\n\n" +
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
            this.scene.start("Level4");
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
                "You're on a roll! ... or a hop? Keep going!\n\n" +
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
            "Level 5",
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
            this.scene.start("Level5");
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
