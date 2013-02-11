// Base
//

define('RenderObject', ['renderable/Renderable', 'Vectors'], function(r, v) {

  exports.RenderObject = r.Renderable.extend(function(base) {

    function getVel() {
      return this.vel;
    }

    function setVel(val) {
      this.vel = val;
    }

    function setXVel(x) {
      this.vel.x = x;
    }

    function setYVel(y) {
      this.vel.y = y;
    }

    function getAcc() {
      return this.acc;
    }

    function setAcc(val) {
      this.acc = val;
    }

    function closest(collection, number) {
      var myPos = this.getPosition();

      if (collection) {
        collection.sort(function (a,b) {
          return myPos.sub(a.getPosition()) - myPos.sub(b.getPosition());
        });
      }

      return number ? collection.slice(0, number) : collection;
    }

    function within(collection, dist) {
      var myPos = this.getPosition(),
          result = [];
      if (collection) {
        result = collection.filter(function (a) {
          return myPos.sub(a.getPosition()) < dist;
        });
      }

      return result;
    }

    function update() {
      // Accelerate
      //this.vel.add(acc);

      // Move
      this.vel = this.dir.normalize(this.speed);
      this.move(this.vel);
    }

    function init(conf) {
      base.init.call(this, conf.graphics);

      this.vel = new v.Vec2d(0,0);
      this.dir = new v.Vec2d(0,0);

      // Not actually using acc for anything atm.  this.acc = new v.Vec2d(0,0); 
      this.speed = conf.speed || 5;

      if (conf.pos) this.setPosition(conf.pos);
    }

    return {
      init: init,
      update: update,
      closest: closest,
      within: within,
      getVel: getVel,
      setVel: setVel,
      setXVel: setXVel,
      setYVel: setYVel,
      getAcc: getAcc,
      setAcc: setAcc
    };
  });
});
