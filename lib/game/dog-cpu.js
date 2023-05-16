ig.module{
    'game.entities.dog-cpu'
}
.requires{
    'game.entities.dog'
    'game.entities.cavefloor'
}
.defines(function(){

    entitydogcpu = entitydog.extend({

       update: function(){

        var cavefloor = ig.game.getentitiesbytype( entitycavefloor )[0];

        if( dog.pos.y * dog.size.y/2 > this.pos.y * this.size.y/2) {
            this.vol.y = -100;
        }
        else{
            this.vol.y = 100;
        }

        this.parent():
       }
    });

});