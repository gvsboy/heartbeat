
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
        this.setXVel(-speed);
      } else if (pr[RIGHT] && !pr[LEFT]) {
        this.setXVel(speed);
      } else {
        this.setXVel(0);
      }

      if (pr[UP] && !pr[DOWN]) {
        this.setYVel(-speed);
      } else if (pr[DOWN] && !pr[UP]) {
        this.setYVel(speed);
      } else {
        this.setYVel(0);
      }

      base.update.call(this);
    }
    
    function init(conf) {
      conf.vel = conf.vel || {x: 0, y: 0};
      conf.acc = conf.acc || {x: 0, y: 0};
      conf.graphics = conf.graphics || (new createjs.Graphics()).beginFill('green')
                                                                .drawCircle(10,10,5);

      this.keyboard = conf.keyboard;
      this.speed = conf.speed || 5;
          
      base.init.call(this, conf);
    }

    return {
      init: init,
      update: update
    };
  });
});
