var Fantasy = Fantasy || {};

Fantasy.StoryState = {
    create: function ()
    {
        var bg = this.add.sprite(this.world.centerX, this.world.centerY, 'pixelSiteWander');
        bg.scale.setTo(0.5, 0.6);
        bg.anchor.setTo(0.5, 0.5);
        var start = this.add.button(800, 0, 'startGame', function()
        {
            start.destroy();
            back_emitter.on=false;
            mid_emitter.on=false;
            front_emitter.on=false;
            var enterTween = this.add.tween(bg.scale).to({x: 5, y: 5}, 2000, "Linear", true);
            enterTween.onComplete.add(function()
            {
                this.game.state.start('Game');
            }, this);
        }, this);
        start.scale.setTo(0.4, 0.4);
        
        
        var back_emitter = this.add.emitter(this.world.centerX, -32, 600);
        back_emitter.makeParticles('snowflakeSpritesheet', [0, 1, 2, 3, 4, 5]);
        back_emitter.maxParticleScale = 0.5;
        back_emitter.minParticleScale = 0.1;
        back_emitter.setYSpeed(20, 100);
        back_emitter.gravity = 0;
        back_emitter.width = this.world.width * 1.5;
        back_emitter.minRotation = 0;
        back_emitter.maxRotation = 40;
        
        var mid_emitter = this.add.emitter(this.world.centerX, -32, 250);
        mid_emitter.makeParticles('snowflakeSpritesheet', [0, 1, 2, 3, 4, 5]);
        mid_emitter.maxParticleScale = 0.6;
        mid_emitter.minParticleScale = 0.4;
        mid_emitter.setYSpeed(50, 150);
        mid_emitter.gravity = 0;
        mid_emitter.width = this.world.width * 1.5;
        mid_emitter.minRotation = 0;
        mid_emitter.maxRotation = 40;

        var front_emitter = this.add.emitter(this.world.centerX, -32, 50);
        front_emitter.makeParticles('snowflakeSpritesheet', [0, 1, 2, 3, 4, 5]);
        front_emitter.maxParticleScale = 0.5;
        front_emitter.minParticleScale = 0.1;
        front_emitter.setYSpeed(100, 200);
        front_emitter.gravity = 0;
        front_emitter.width = this.world.width * 1.5;
        front_emitter.minRotation = 0;
        front_emitter.maxRotation = 40;
        
        back_emitter.start(false, 14000, 1);
        mid_emitter.start(false, 12000, 40);
        front_emitter.start(false, 6000, 1000);
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/