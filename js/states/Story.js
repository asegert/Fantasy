var Fantasy = Fantasy || {};

Fantasy.StoryState = {
    create: function ()
    {
        var bg = this.add.sprite(this.world.centerX, this.world.centerY, 'pixelSiteWander');
        bg.scale.setTo(0.5, 0.6);
        bg.anchor.setTo(0.5, 0.5);
        //this.add.tween(bg.scale).to({x: 5, y: 5}, 2000, "Linear", true);
        //this.game.state.start('Game');
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/