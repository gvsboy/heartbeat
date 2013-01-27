
define('Player', ['renderable/RenderObject'], function(ro) {
  exports.Player = ro.RenderObject.extend(function(base) {
    
    var LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;
        
    function update() {
      var pr = this.keyboard._pressed,
          speed = this.speed;
          
      if (pr[LEFT] && !pr[RIGHT]) {
        this.dir.x = -1;
      } else if (pr[RIGHT] && !pr[LEFT]) {
        this.dir.x = 1;
      } else {
        this.dir.x = 0;
      }

      if (pr[UP] && !pr[DOWN]) {
        this.dir.y = -1;
      } else if (pr[DOWN] && !pr[UP]) {
        this.dir.y = 1;
      } else {
        this.dir.y = 0;
      }

      base.update.call(this);
    }
    
    function init(conf) {
      conf.graphics = conf.graphics || (new createjs.Graphics()).beginFill('green')
                                                                .drawCircle(10,10,5);

      this.keyboard = conf.keyboard;
          
      base.init.call(this, conf);
    }

    return {
      init: init,
      update: update
    };
  });
});
