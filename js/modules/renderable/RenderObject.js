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
      var smallestDist,
          dist,
          i,
          close = [];

      if (collection) {
        smallestDist = this.distance(collection[0].getPosition());
        close.push(collection[0]);

        if (collection.length > 1) {
          for (i = 1; i < collection.length; i++) {
            dist = this.distance(collection[i].getPosition());

            if (dist < smallestDist) {
              smallestDist = dist;
              close.unshift(collection[i]);
            }
          }
        }
      }

      // NEED TO ADJUST TO PROPERLY RETURN A FULL ARRAY OF THE CLOSEST X
      return close[0];
    }

    function within(collection, dist) {
      var i,
          result = [];
      if (collection) {
        for (i = 0; i < collection.length; i++) {
          if (this.distance(collection[i].getPosition()) <= dist) {
            result.push(collection[i]);
          }
        }
      }
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

      // Not actually using acc for anything atm.
      this.acc = new v.Vec2d(0,0);

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
