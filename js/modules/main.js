define("main", [
	"renderable/Renderable",
	"renderable/RenderObject",
	"renderable/Player",
	"renderable/Flashlight"
],
function(Renderable, RenderObject, Player, Flashlight) {
	
  var stage = new createjs.Stage(document.getElementById('canvas'));

  // Just test code

  console.log("Game start!");

  var graphics = new createjs.Graphics();
  graphics.beginFill('red')
          .drawCircle(0,0,10);

  var a = new Renderable.Renderable(graphics);
  
  
  var graphics2 = new createjs.Graphics();
  graphics2.beginFill('blue')
           .drawCircle(0,0,20);

  var b = new RenderObject.RenderObject(graphics2);

  var c = new Player.Player({x:1,y:1}, {x:0.1, y:0.1});
  a.setPosition({x:20,y:20});

  stage.addChild(a.symbol);
  stage.addChild(b.symbol);
  stage.addChild(c.symbol);
  
  // End test code

	var flashlight = new Flashlight.Flashlight();
	stage.addChild(flashlight.symbol);
	
	var ticker = createjs.Ticker;
	ticker.addListener(tick);
	ticker.useRAF = true;
	ticker.setFPS(30);
	
	function tick() {
    	c.update();
		flashlight.update();
		stage.update();
	}

});
