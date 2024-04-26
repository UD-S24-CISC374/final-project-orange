import Phaser from "phaser";

export default class Instructions extends Phaser.GameObjects.Container {
    private instructionsPopup!: Phaser.GameObjects.Container;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        scene.add.existing(this);

        const instructions = scene.add.text(
            scene.cameras.main.width - 65,
            125,
            "?",
            {
                color: "#000",
                fontSize: "50px",
                fontStyle: "bold",
            }
        );

        instructions
            .setInteractive()
            .on("pointerdown", () => {
                this.showInstructionsPopup();
            })
            .on("pointerover", () => instructions.setScale(1.1))
            .on("pointerout", () => instructions.setScale(1));

        this.instructionsPopup = this.createInstructionsPopup();
        this.instructionsPopup.setVisible(false);
        // this.scene.start("Start");
    }
    private createInstructionsPopup(): Phaser.GameObjects.Container {
        const background = this.scene.add.rectangle(
            this.scene.cameras.main.width / 2,
            this.scene.cameras.main.height / 2,
            800,
            600,
            0xadd8e6
        );

        const instructionsText = this.scene.add.text(
            this.scene.cameras.main.width / 2,
            this.scene.cameras.main.height / 2,
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
        const closeButton = this.scene.add.text(
            this.scene.cameras.main.width / 2,
            this.scene.cameras.main.height / 2 + 280,
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

        const popup = this.scene.add.container();
        popup.add(background);
        popup.add(instructionsText);
        popup.add(closeButton);
        return popup;
    }

    private hideInstructionsPopup(): void {
        this.instructionsPopup.setVisible(false);
    }

    private showInstructionsPopup(): void {
        this.instructionsPopup.setVisible(true);
    }
}
