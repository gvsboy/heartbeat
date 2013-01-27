define("flashlight", ["renderable/Renderable"], function(Renderable) {
	
	exports.Flashlight = Renderable.Renderable.extend(function(base) {
		
		return {
			
			init: function() {
				
				// Not calling base.init for the time being... don't need a container.
				this.symbol = new createjs.Shape();
				
				// Initial orb configuration
				this.radius = 120;
				this.colorArray = ["rgba(102, 102, 102, 0)", "rgba(0, 0, 0, 0.9)"];
			},
			
			update: function() {
				
				var x, y;
				
				if (!this.stage) {
					this.configure();
				}
				else {
					x = this.stage.mouseX;
					y = this.stage.mouseY;
					this.symbol.graphics.clear();
					this.symbol.graphics
						.setStrokeStyle(1)
						.beginStroke("#000")
						.beginRadialGradientFill(this.colorArray, [0, 1], x, y, 0, x, y, this.radius)
						.drawCircle(this.stage.mouseX, this.stage.mouseY, this.radius);
				}
			},
			
			configure: function() {
				
				// Set an instance of the stage. If the stage doesn't exist, that probably means
				// the flashlight hasn't been added to it---ABORT!
				var stage = this.stage = this.symbol.getStage();
				if (!this.stage) { return; }
				stage.mask = this.symbol;
			}
			
		}
		
	});
	
});