var Fantasy = Fantasy || {};

Fantasy.GameState = {
    create: function ()
    {
        this.background = this.add.sprite(0, 0, 'gameBoard');
        
        this.crystal1 = this.add.button(720, 485, 'crystal', function()
        {
            console.log("load Realm 1");
        }, this);
        this.crystal1.scale.setTo(0.02, 0.02);
        
        this.crystal2 = this.add.button(90, 275, 'crystal', function()
        {
            console.log("load Realm 2");
        }, this);
        this.crystal2.scale.setTo(0.02, 0.02);
        
        this.crystal3 = this.add.button(150, 460, 'crystal', function()
        {
            console.log("load Realm 3");
        }, this);
        this.crystal3.scale.setTo(0.02, 0.02);
        
        this.crystal4 = this.add.button(900, 260, 'crystal', function()
        {
            console.log("load Realm 4");
        }, this);
        this.crystal4.scale.setTo(0.02, 0.02);
        
        this.crystal5 = this.add.button(610, 67, 'crystal', function()
        {
            console.log("load Realm 5");
        }, this);
        this.crystal5.scale.setTo(0.02, 0.02);
    },
    update: function ()
    {
        
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/