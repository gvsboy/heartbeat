define("main", [
	"renderable/Renderable",
	"renderable/RenderObject",
	"renderable/Player",
  "renderable/Monster",
	"renderable/Flashlight",
  "Vectors"
],
function(Renderable, RenderObject, Player, Monster, Flashlight, Vectors) {
	
  var stage = new createjs.Stage(document.getElementById('canvas'));

  // Just test code
	
	// Need this shape for the flashlight effect to be ... effective.
	// testing of course!
	var bg = new createjs.Shape();
	bg.graphics
		.beginFill("grey")
		.drawRect(0, 0, 450, 450);
	stage.addChild(bg);
	
  var Keyboard = function () {
    this._pressed = {};
  };

  Keyboard.prototype._keyDown = function (ev){
    this._pressed[ev.keyCode] = (new Date()).getTime();
  };

  Keyboard.prototype._keyUp = function(ev) {
    delete this._pressed[ev.keyCode];
  };

  var keyboard = new Keyboard();
  // Add the event listeners
  window.addEventListener('keyup', function(ev){keyboard._keyUp(ev);}, false);
  window.addEventListener('keydown', function(ev) {keyboard._keyDown(ev);}, false);

  console.log("Game start!");

  var graphics = new createjs.Graphics();
  graphics.beginFill('red')
          .drawCircle(0,0,10);

  var a = new Renderable.Renderable(graphics);
  
  
  var graphics2 = new createjs.Graphics();
  graphics2.beginFill('blue')
           .drawCircle(0,0,20);

  var b = new RenderObject.RenderObject(graphics2);

  var c = new Player.Player({keyboard: keyboard});
  
  var testMonster = new Monster.Monster({player: c});

  // MONSTERS
  //
  var Monsters = {
    list: [],
    add: function() {
      var posVec = new Vectors.Vec2d(Math.floor(Math.random()*450), Math.floor(Math.random()*450));
      var newMon = new Monster.Monster({player: c, pos: posVec});
      stage.addChildAt(newMon.symbol, 1);
      this.list.push(newMon);
    },
    update: function() {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].update();
      }
    }
  };

  a.setPosition(new Vectors.Vec2d(20, 20));

  stage.addChild(a.symbol);
  stage.addChild(b.symbol);
  stage.addChild(c.symbol);

  $('#add-monster').click(function() {
    Monsters.add();
  });
  
  // End test code

	var flashlight = new Flashlight.Flashlight();
  flashlight.radius = 400;
	stage.addChild(flashlight.symbol);
	
	var ticker = createjs.Ticker;
	ticker.addListener(tick);
	ticker.useRAF = true;
	ticker.setFPS(30);
	
	function tick() {
    c.update();
		flashlight.update();
    Monsters.update();
		stage.update();
	}

});
