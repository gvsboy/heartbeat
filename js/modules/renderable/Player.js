
define('Player', ['renderable/RenderObject'], function(ro) {
  exports.Player = ro.RenderObject.extend(function(base) {
    
    function init(vel, acc) {
      console.log('Player init');

      var playerGraphics = new createjs.Graphics();
      playerGraphics.beginFill('green')
                    .drawCircle(10,10,5);

      base.init.call(this, playerGraphics, vel, acc);
    }

    return {
      init: init
    };
  });
});
