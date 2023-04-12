import Phaser from "phaser";
import Cloud from "@/component/sprites/cloud/Cloud";
import Tamagotchi from "@/component/sprites/tamagotchi/Tamagotchi";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    // Load any assets that you need for your game, such as images or audio
    this.load.image("bg-grass", "assets/images/bg-color-grass.png");
    // Load the cloud images
    Cloud.loadClouds(this.load, [
      "cloud1",
      "cloud2",
      "cloud3",
      "cloud4",
      "cloud5",
    ]);
  }

  create() {
    // Add the background image to the scene
    const bg = this.add.image(0, 0, "bg-grass");
    bg.setOrigin(0, 0); // Set the origin to the top-left corner

    // Create a single Cloud instance at the center of the screen
    // @ts-ignore
    const x = this.game.config.width / 2;
    // @ts-ignore
    const y = this.game.config.height / 2;
    // Create some clouds
    const cloud1 = new Cloud(this, 300, 100, "cloud1");
    const cloud2 = new Cloud(this, 250, 150, "cloud2");
    const cloud3 = new Cloud(this, 50, 220, "cloud3");
    const cloud4 = new Cloud(this, 550, 250, "cloud4");
    const cloud5 = new Cloud(this, 100, 110, "cloud5");

    // Load sprite sheet
    this.load.atlas(
      "mametchi",
      "assets/mametchi-jumping-jacks.png",
      "assets/mametchi-jumping-jacks.json"
    );

    // Create sprite
    const mametchi = this.add.sprite(100, 100, "mametchi", "mametchi1-11.png");

    // Define animation
    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNames("mametchi", {
        prefix: "mametchi1-",
        start: 11,
        end: 17,
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Play animation on space key press
    this.input.keyboard.on("keydown-SPACE", () => {
      mametchi.play("jump", true);
    });
  }
}
