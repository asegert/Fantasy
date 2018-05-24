var Fantasy = Fantasy || {};

Fantasy.PreloadState = {
    preload: function ()
    {
        var preloadBG = this.add.sprite((this.world.width - 580) * 0.5, (this.world.height + 150) * 0.5, 'loading-background');
        var preloadProgress = this.add.sprite((this.world.width - 540) * 0.5, (this.world.height + 170) * 0.5, 'loading-progress');
        this.load.setPreloadSprite(preloadProgress);

        this.load.image('pixelSiteWander', 'assets/images/pixelSiteWander.jpg');
        this.load.image('startGame', 'assets/images/startGame.png');
        this.load.image('gameBoard', 'assets/images/gameBoard.png');
        this.load.image('dragonGrove', 'assets/images/dragonGrove.png');
        this.load.image('crystal', 'assets/images/crystal.png');
        
        this.load.spritesheet('snowflakeSpritesheet', 'assets/images/snowflakeSpritesheet.png', 22, 25, 9);
    },
    create: function ()
    {
        this.state.start('Story');
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/