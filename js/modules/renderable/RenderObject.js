// Base
//

define('RenderObject', ['renderable/Renderable'], function(r) {

  exports.RenderObject = r.Renderable.extend(function(base) {
    // Private

    // Public
    function init () {
      base.init.call(this);
    }

    return {
      init: init
    };
  });
});
