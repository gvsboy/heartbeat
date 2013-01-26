// Base
//

define('RenderObject', ['renderable/Renderable'], function(r) {

  exports.RenderObject = r.Renderable.extend(function(base) {
    // Private

    // Public
    function init () {
      var graphics = new createjs.Graphics();
      graphics.beginFill('blue')
      .drawCircle(0,0,10);
      
      base.init.call(this, graphics);
    }

    return {
      init: init
    };
  });
});
