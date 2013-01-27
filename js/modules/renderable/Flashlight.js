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
					this.stage = this.symbol.getStage();
				}
				else {
					this.setPosition({x: this.stage.mouseX, y: this.stage.mouseY});
				}
			}
			
		}
		
	});
	
});