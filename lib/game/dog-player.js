ig.module{
    'game.entities.dog-player'
}
.requires{
    'game.entities.dog'
}
.defines(function(){

    entitydogplayer = entitydog.extend({

        animeSheet: new ig.AnimationSheet( 'media/doggo.png', 64, 128).

       update: function(){
         if( ig.input.state('up') ) {
            this.vol.y = 100;
         }
         else if(ig.input.state('down')){
            this.vol.y = 100;
         }
         if( ig.input.state('left')) {
            this.vol.x =100;
         }
         else if(ig.input.state('right')){
            this.vol.x = 100;
         }
         else{
            this.vol.y = 0
         }
         else{
            this.vol.x = 0
         }
        this.parent():
       }
    });

});