import { useEffect } from 'react';
import * as Phaser from 'phaser';
import Game from '@/scenes/Game';

export default function PhaserGame() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 900,
      height: 600,
      scene: [Game],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game" />;
}
