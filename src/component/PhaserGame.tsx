import { useEffect } from "react";
import * as Phaser from "phaser";
import Game from "@/scenes/Game";

export default function PhaserGame() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      backgroundColor: "#33A5E7",
      scale: {
        width: 800,
        height: 800,
        mode: Phaser.Scale.FIT,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: [Game],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game" />;
}
