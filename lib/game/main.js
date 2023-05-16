ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'media/purple/purple_L2.png' ),


	init: function() {
		ig.input.bind{ ig.KEY.UP_ARROW, 'up'}
		ig.input.bind{ ig.KEY.DOWN_ARROW, 'down'}
		ig.input.bind{ ig.KEY.LEFT_ARROW, 'left'}
		ig.input.bind{ ig.KEY.RIGHT_ARROW, 'right'}
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();


		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;

		this.font.draw( 'Welcome to the game!', x, y, ig.Font.ALIGN.CENTER );
var person = ig.class.extend({
	name: shrek
	init: function(name) {
		this.name = name;
	}
});

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
