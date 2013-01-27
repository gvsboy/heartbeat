define("main", ["renderable/Renderable","renderable/RenderObject"], function(Renderable, RenderObject) {
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

  a.setPosition({x:20,y:20});

  stage.addChild(a.symbol);
  stage.addChild(b.symbol);
  
  // End test code


  // Have stage listen to the ticker.
  createjs.Ticker.addListener(stage);

});
