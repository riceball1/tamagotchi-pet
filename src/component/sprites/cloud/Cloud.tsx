import Phaser from 'phaser'

export default class Cloud extends Phaser.GameObjects.Image {
  private velocityX: number = 10
  private direction: number = 1

  constructor(scene: Phaser.Scene, x: number, y: number, name: string) {
    // Create the image using the imageName
    super(scene, x, y, name)
    this.velocityX = Phaser.Math.Between(10, 50)
    // Add the image to the scene
    scene.add.existing(this)
    // Set the image's origin to its center
    this.setOrigin(0.5)

    // Start the animation
    this.move()
  }

  private move() {
    this.velocityX = Phaser.Math.Between(0, 50)
    // Move the cloud image horizontally based on its velocity and direction
    this.x += this.velocityX * this.direction

    // If the cloud goes off the right side of the screen, wrap around to the left side
    // @ts-ignore
    if (this.x > this.scene.game.config.width) {
        this.x = -this.width
    }

    // Schedule the next move after a short delay
    this.scene.time.delayedCall(100, this.move, [], this)
}


  // The static method to load the cloud images
  static loadClouds(loader: Phaser.Loader.LoaderPlugin, cloudNames: string[]) {
    cloudNames.forEach((name) => {
      loader.image(name, `/assets/images/clouds/${name}.png`)
    })
  }
}
