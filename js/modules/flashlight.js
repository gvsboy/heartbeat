define("flashlight", function() {
	
	var darkness, spotlight, _stage, radius;
	
	exports.init = function(stage) {
		
		_stage = stage;
		radius = 120;
		
		spotlight = new createjs.Shape();
		
		_stage.addChild(spotlight);	
		_stage.mask = spotlight;
	};
	
	exports.update = function() {
		
		var x = _stage.mouseX;
		var y = _stage.mouseY;
		
		spotlight.graphics.clear();
		spotlight.graphics
			.setStrokeStyle(1)
			.beginStroke("#000")
			.beginRadialGradientFill(["rgba(102, 102, 102, 0)","rgba(0, 0, 0, 0.9)"], [0, 1], x, y, 0, x, y, radius)
			.drawCircle(_stage.mouseX, _stage.mouseY, radius);
			
	};
	
});