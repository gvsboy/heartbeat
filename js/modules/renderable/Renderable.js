define("renderable", ["lib/fiber.min", "Vectors"], function(Fiber, v) {

  exports.Renderable = Fiber.extend(function() {

    function getPosition() {
      return new v.Vec2d(this.symbol.x, this.symbol.y);
    }

    function setPosition(val) {
      this.symbol.x = val.x;
      this.symbol.y = val.y;
    }

    function move(v) {
      this.symbol.x += v.x;
      this.symbol.y += v.y;
    }

    function getSymbol() {
      return this.symbol;
    }

    function addShape(g) {
      var shape = new createjs.Shape(g);
      this.symbol.addChild(shape);
    }

    // We don't need to do anything on a logic update for
    // the Renderable base class.
    function update() {}

    function init(g) {
      this.symbol = new createjs.Container();

      if (g) {
        this.addShape(g);
      }

      console.log('I\'m new!');
    }

    return {
      init: init,
      getPosition: getPosition,
      setPosition: setPosition,
      move: move,
      getSymbol: getSymbol,
      addShape: addShape,
      update: update 
    };

  });

});
