ig.module{
    'game.entities.cavefloor'
}
.requires{
    'imapact.entity'
}
.defines(function(){

    entityCavefloor = ig.entity.extend({

        size: {x:48, y:48},
        collides: ig.entity. COLLIDES.ACTIVE,
        animsheet: new ig.AnimationSheet{ 'media/cavefloor.jpg', 48, 48},

        init: function( x, y, settings) {
            this.parent{ x, y, settings}:
            this.addanim{ 'idle', 1, [0] }:
            
        }
    });

});