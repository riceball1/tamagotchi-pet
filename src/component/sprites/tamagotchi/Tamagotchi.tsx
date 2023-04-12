import Phaser from 'phaser';

class Tamagotchi extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'mametchi');

    // Set up animations
    scene.anims.create({
      key: 'position1',
      frames: scene.anims.generateFrameNumbers('mametchi', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'position2',
      frames: scene.anims.generateFrameNumbers('mametchi', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'position3',
      frames: scene.anims.generateFrameNumbers('mametchi', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
    });

    // Set default animation
    this.anims.play('position1');
  }
}

export default Tamagotchi;
