define("flashlight", function() {
	
	var _orb, _stage;
	
	exports.init = function(stage) {
		_stage = stage;
		_orb = new createjs.Shape();
		_orb.graphics
			.beginFill("yellow")
			.drawCircle(0, 0, 20);
		
		_stage.addChild(_orb);
	};
	
	exports.tick = function() {
		_orb.x = _stage.mouseX;
		_orb.y = _stage.mouseY;
	}
	
});