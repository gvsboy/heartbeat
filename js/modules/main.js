define("main", ["flashlight", "renderable/Renderable","renderable/RenderObject"], function(flashlight, Renderable, RenderObject) {

  console.log("Game start!");

  var graphics = new createjs.Graphics();
  graphics.beginFill('red')
          .drawCircle(0,0,10);

  var a = new Renderable.Renderable(graphics);
  var b = new RenderObject.RenderObject();


  var stage = new createjs.Stage(document.getElementById('canvas'));

  a.setPosition({x:20,y:20});

  stage.addChild(a.symbol);
  stage.addChild(b.symbol);


  stage.update();

  console.log(a.getPosition());
  console.log(b.getPosition());

	flashlight.init(stage);
	
	var ticker = createjs.Ticker;
	ticker.addListener(tick);
	ticker.useRAF = true;
	ticker.setFPS(30);
	
	function tick() {
		flashlight.tick();
		stage.update();
	}

});
