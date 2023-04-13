import Phaser from "phaser";

class Tamagotchi extends Phaser.GameObjects.Sprite {
  x: number;
  y: number;
  constructor(scene: any, x: number, y: number) {
    super(scene, x, y, "mametchi");

    this.x = x;
    this.y = y;
  }

  create() {
    const tamo = this.scene.add.sprite(
      this.x,
      this.y + 235,
      "mametchi",
      "mametchi1-11.png"
    );
    tamo.setScale(3);
    this.createJumpAnimation(tamo);
  }

  createJumpAnimation(sprite: Phaser.GameObjects.Sprite) {
    // Define animation
    sprite.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNames("mametchi", {
        prefix: "mametchi1-",
        start: 11,
        end: 17,
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 10,
    });

    // Play animation on space key press
    this.scene.input.keyboard.on("keydown-SPACE", () => {
      sprite.play("jump", true);
    });
  }
}

export default Tamagotchi;
