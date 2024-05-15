import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    private instructionsPopup!: Phaser.GameObjects.Container;
    private backgroundMusic!: Phaser.Sound.BaseSound;
    private muteButton!: Phaser.GameObjects.Text;
    private isMuted: boolean = true;
    private splash!: Phaser.Sound.BaseSound;

    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("frogBackground", "assets/bg.png");
        this.load.image("froghappy", "assets/faces/neutral.png");
        this.load.image("lilypad", "assets/newLilypad.png");
        this.load.image("start", "assets/start.png");
        this.load.image("instructions", "assets/newLilypad.png");
        this.load.image("frogcool", "assets/faces/cool.png");
        this.load.image("frogum", "assets/faces/um.png");
        this.load.image("win", "assets/faces/glad.png");
        this.load.image("lose", "assets/faces/sad.png");
        this.load.audio("backgroundMusic", "assets/background2.mp3");
        this.load.audio("splash2", "assets/splash2.wav");
        this.load.audio("ribbit", "assets/ribbit.mp3");
        this.load.audio("reuniting", "assets/reuniting.mp3");
    }

    create() {
        //this.scene.start("Level9"); ////////////////// TO TEST INDIVIDUAL LEVEL ///// COMMENT AFTER TESTING /////////////// DELETE WHEN FINISHED
        let bg = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "frogBackground"
        );
        this.backgroundMusic = this.sound.add("backgroundMusic", {
            loop: true,
            volume: 0.5,
        });
        this.backgroundMusic.play();
        this.muteButton = this.add
            .text(this.cameras.main.width - 190, 50, "Mute", {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            })
            .setInteractive();
        this.muteButton.on("pointerdown", () => {
            this.toggleMute();
        });
        let scaleX = this.cameras.main.width / bg.width;
        let scaleY = this.cameras.main.height / bg.height;
        let scale = Math.max(scaleX, scaleY);
        bg.setScale(scale).setScrollFactor(0);

        this.add
            .text(this.cameras.main.centerX, 300, "Cross the Pond", {
                color: "#000",
                fontSize: "100px",
                fontStyle: "bold",
            })
            .setOrigin(0.5, 1);
        const start = this.add.text(
            this.cameras.main.centerX - 100,
            350,
            "Start",
            {
                color: "#000",
                fontSize: "75px",
                fontStyle: "bold",
            }
        );
        const instructions = this.add.text(
            this.cameras.main.centerX - 250,
            425,
            "Instructions",
            {
                color: "#000",
                fontSize: "75px",
                fontStyle: "bold",
            }
        );
        const splash = this.sound.add("splash2", { loop: false });
        instructions
            .setInteractive()
            .on("pointerdown", () => {
                this.showInstructionsPopup();
                splash.play();
            })
            .on("pointerover", () => instructions.setScale(1.1))
            .on("pointerout", () => instructions.setScale(1));
        start
            .setInteractive()
            .on("pointerdown", () => {
                splash.play();
                this.scene.start("Level1"); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            })
            .on("pointerover", () => start.setScale(1.1))
            .on("pointerout", () => start.setScale(1));

        this.add.image(this.cameras.main.centerX, 150, "frogcool").setScale(2);
        this.add.image(520, 390, "frogum");
        this.add.image(370, 465, "frogum");
        this.instructionsPopup = this.createInstructionsPopup();
        this.instructionsPopup.setVisible(false);
        // this.scene.start("Start");
    }
    toggleMute() {
        this.isMuted = !this.isMuted;
        this.game.sound.mute = this.isMuted;
    }
    private createInstructionsPopup(): Phaser.GameObjects.Container {
        const background = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            800,
            600,
            0xadd8e6
        );
        const instructionsText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "Your mission is to guide the baby frog back to its mother.\n\n" +
                "As you navigate through the pond, you'll encounter many lilypads, each one representing a step.\n\n" +
                "Click on the lilypads strategically, selecting the route that minimizes the total distance traveled.\n\n" +
                "Let's hop to it!",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
                wordWrap: { width: 350 },
            }
        );
        instructionsText.setOrigin(0.5);
        //close button
        const closeButton = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2 + 280,
            "close",
            {
                color: "#000",
                fontSize: "24px",
                fontStyle: "bold",
            }
        );
        closeButton.setOrigin(0.5);
        closeButton.setInteractive();
        closeButton.on("pointerdown", () => {
            this.hideInstructionsPopup();
        });

        const popup = this.add.container();
        popup.add(background);
        popup.add(instructionsText);
        popup.add(closeButton);
        return popup;
    }
    private showInstructionsPopup(): void {
        this.instructionsPopup.setVisible(true);
    }
    private hideInstructionsPopup(): void {
        this.instructionsPopup.setVisible(false);
    }
}
