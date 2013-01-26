define("renderable", ["lib/fiber.min"], function(Fiber) {

	exports.Renderable = Fiber.extend(function() {
		
		return {
			
			init: function() {
				console.log("I'm new!");
			}
			
		}
		
	});
	
});