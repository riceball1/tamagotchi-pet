import Phaser from "phaser";
import Cloud from "@/component/sprites/cloud/Cloud";
import Tamagotchi from "@/component/sprites/tamagotchi/Tamagotchi";

export default class Game extends Phaser.Scene {
  private mametchi!: Tamagotchi;

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

    // Load sprite sheet
    this.load.atlas(
      "mametchi",
      "assets/mametchi-jumping-jacks.png",
      "assets/mametchi-jumping-jacks.json"
    );

    // load mobile control assets
    this.load.image("leftButton", "assets/images/food-items/apple.png");
    this.load.image("rightButton", "assets/images/food-items/burger.png");
    this.load.image("upButton", "assets/images/food-items/banana.png");
    this.load.image("downButton", "assets/images/food-items/hotdog.png");
  }

  create() {
    // Set up the game world
    this.physics.world.setBounds(0, 0, 320, 240);

    // Add the background image to the scene
    const background = this.add.image(0, 0, "bg-grass");
    background.setOrigin(0, 0); // Set the origin to the top-left corner

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

    this.mametchi = new Tamagotchi(this, x, y, "mametchi");
    this.mametchi.create();

    this.createInstructions();

    // Set up the camera
    this.cameras.main.setBounds(0, 0, 320, 240);
    this.cameras.main.startFollow(this.mametchi);

    // Add collision detection
    this.physics.add.collider(this.mametchi, background);
  }

  

  createInstructions() {
    // Create a text object
    const text = this.add.text(this.cameras.main.height - 100, this.cameras.main.height - 50, "", {
      fontSize: "16px",
      color: "#000",
      align: "right",
      wordWrap: { width: this.cameras.main.width },
    });
    text.setOrigin(1, 0); // Align the text to the top right corner

    // Set the text to display
    text.setText("Click the food items to move up, down, left, right");
  }
}
