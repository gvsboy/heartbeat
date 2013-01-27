// Base
//

define('RenderObject', ['renderable/Renderable'], function(r) {

  exports.RenderObject = r.Renderable.extend(function(base) {
    // Private

    // Public
    function init (g) {
      base.init.call(this, g);
    }

    return {
      init: init
    };
  });
});
