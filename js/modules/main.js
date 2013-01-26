define("main", ["renderable/Renderable","renderable/RenderObject"], function(Renderable, RenderObject) {
	
	console.log("Game start!");
	
	var a = new Renderable.Renderable();
  var b = new RenderObject.RenderObject();


  var stage = new createjs.Stage(document.getElementById('canvas'));

  stage.addChild(a.symbol)
       .addChild(b.symbol);


  stage.update();
	
  console.log(a.getPosition());
  console.log(b.getPosition());

});
