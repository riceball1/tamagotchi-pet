import Phaser from "phaser";

class Tamagotchi extends Phaser.Physics.Arcade.Sprite {
  x: number;
  y: number;
  speed: number = 100;
  repeat: boolean = false;
  constructor(scene: any, x: number, y: number, textureKey: string) {
    super(scene, x, y, textureKey);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.x = x;
    this.y = y + 235;
    this.setScale(3);
  }

  create() {
    this.createJumpAnimation();
    this.createMovementListeners();
  }

  jump() {
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
      repeat: this.repeat ? 0 : -1,
    });
  }

  createJumpAnimation() {
    this.jump();
    // Toggle animation on space key press or touch event
    const toggleJump = () => {
      if (this.anims.isPlaying) {
        this.anims.stop();
      } else {
        this.play("jump", true);
      }
      this.repeat = !this.repeat;
    };
    this.scene.input.keyboard.on("keydown-SPACE", toggleJump);
    this.scene.input.on("pointerdown", toggleJump);
  }

  createMovementListeners() {
    // Remove the old event listeners
    this.scene.input.keyboard.off("keydown-LEFT");
    this.scene.input.keyboard.off("keydown-RIGHT");
    this.scene.input.keyboard.off("keydown-UP");
    this.scene.input.keyboard.off("keydown-DOWN");
    this.scene.input.keyboard.off("keyup-LEFT RIGHT UP DOWN");

    // Add new event listeners to buttons
    const leftButton = this.scene.add
    .image(50, 650, "leftButton")
    .setScale(2)
    .setInteractive();
  const rightButton = this.scene.add
    .image(200, 650, "rightButton")
    .setScale(2)
    .setInteractive();
  const upButton = this.scene.add
    .image(100, 600, "upButton")
    .setScale(2)
    .setInteractive();
  const downButton = this.scene.add
    .image(100, 700, "downButton")
    .setScale(2)
    .setInteractive();

    leftButton.on("pointerdown", () => {
      this.setVelocityX(-this.speed); // move left
    });
    rightButton.on("pointerdown", () => {
      this.setVelocityX(this.speed); // move right
    });
    upButton.on("pointerdown", () => {
      this.setVelocityY(-this.speed); // move up
    });
    downButton.on("pointerdown", () => {
      this.setVelocityY(this.speed); // move down
    });

    // Stop moving when buttons are released
    leftButton.on("pointerup", () => {
      this.setVelocityX(0);
    });
    rightButton.on("pointerup", () => {
      this.setVelocityX(0);
    });
    upButton.on("pointerup", () => {
      this.setVelocityY(0);
    });
    downButton.on("pointerup", () => {
      this.setVelocityY(0);
    });
  }
}

export default Tamagotchi;
