// Base
//

define('RenderObject', ['renderable/Renderable'], function(r) {

  exports.RenderObject = r.Renderable.extend(function(base) {

    function getVel() {
      return this.vel;
    }
    
    function setVel(val) {
      this.vel = val;
    }

    function getAcc() {
      return this.acc;
    }

    function setAcc(val) {
      this.acc = val;
    }

    function update() {
      // Accelerate
      this.vel.x += this.acc.x;
      this.vel.y += this.acc.y;

      // Move
      this.move(this.vel.x, this.vel.y);
    }

    function init(g, vel, acc) {
      base.init.call(this, g);

      this.vel = vel || {x: 0, y: 0};
      this.acc = acc || {x: 0, y: 0};

    }

    return {
      init: init,
      update: update,
      getVel: getVel,
      setVel: setVel,
      getAcc: getAcc,
      setAcc: setAcc
    };
  });
});
