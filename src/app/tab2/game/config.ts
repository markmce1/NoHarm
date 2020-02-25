import * as Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
    width: '100%',
    height: '100%',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-container',
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 350 },
            debug: false
        }
    }
}

export default config
