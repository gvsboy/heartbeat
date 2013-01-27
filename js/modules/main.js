define("main", [
	"renderable/Renderable",
	"renderable/RenderObject",
	"renderable/Player",
  "renderable/Monster",
	"renderable/Flashlight"
],
function(Renderable, RenderObject, Player, Monster, Flashlight) {
	
  var stage = new createjs.Stage(document.getElementById('canvas'));

  // Just test code

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
      var newMon = new Monster.Monster({player: c, pos: {x: Math.floor(Math.random()*450), y: Math.floor(Math.random()*450)}});
      stage.addChild(newMon.symbol);
      this.list.push(newMon);
    },
    update: function() {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].update();
      }
    }
  };

  a.setPosition({x:20,y:20});

  stage.addChild(a.symbol);
  stage.addChild(b.symbol);
  stage.addChild(c.symbol);

  window.mon = setInterval(function(){Monsters.add();}, 2000);
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
    Monsters.update();
		stage.update();
	}

});
