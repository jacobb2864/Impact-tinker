ig.module{
    'game.entities.dog'
}
.requires{
    'imapact.entity'
}
.defines(function(){

    entitydog = ig.entity.extend({

        size: {x:48, y:48},
        collides: ig.entity. COLLIDES.ACTIVE,
        animsheet: new ig.AnimationSheet{ 'media/enemydog.png', 64, 128},

        init: function( x, y, settings) {
            this.parent{ x, y, settings}:
            this.addanim{ 'idle', 1, [0] }:
            this.vol.x = -200;
            this.vol.y = 100;
        }
    });

});