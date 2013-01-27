define("main", ["renderable/Renderable","renderable/RenderObject", "renderable/Player"], function(Renderable, RenderObject, Player) {
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


  // Have stage listen to the ticker.
  createjs.Ticker.addListener(function() {
    c.update();
    stage.update();
  });

});
