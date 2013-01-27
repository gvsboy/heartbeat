define("flashlight", ["renderable/Renderable"], function(Renderable) {
	
	exports.Flashlight = Renderable.Renderable.extend(function(base) {
		
		return {
			
			init: function() {
				var graphics = new createjs.Graphics();
				graphics
					.beginFill('yellow')
					.drawCircle(0, 0, 20);
					
				base.init.call(this, graphics);
			},
			
			update: function() {
				if (!this.stage) {
					this.configure();
				}
				else {
					this.setPosition({x: this.stage.mouseX, y: this.stage.mouseY});
					this.mask.x = this.stage.mouseX;
					this.mask.y = this.stage.mouseY;
				}
			},
			
			configure: function() {
				
				// Set an instance of the stage. If the stage doesn't exist, that probably means
				// the flashlight hasn't been added to it---ABORT!
				var stage = this.stage = this.symbol.getStage();
				if (!this.stage) { return; }
				
			}
			
		}
		
	});
	
});