define("renderable", ["lib/fiber.min"], function(Fiber) {

  exports.Renderable = Fiber.extend(function() {

    function getPosition() {
      return {x: this.symbol.x, y: this.symbol.y};
    }

    function setPosition(val) {
      //this.symbol = val;
      this.symbol.x = val.x;
      this.symbol.y = val.y;
    }

    function getSymbol() {
      return this.symbol;
    }

    function addShape(g) {
      var shape = new createjs.Shape(g);
      this.symbol.addChild(shape);
    }
    
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
      getSymbol: getSymbol,
      addShape: addShape 
    };

  });

});
