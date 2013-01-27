// Vectors for better movement math.

define('Vectors', ['lib/fiber.min'], function (Fiber){
  var Vec2d = Fiber.extend(function (base) {
    
    function init(x, y) {
      this.x = x;
      this.y = y;
    }

    function add(vec) {
      return new Vec2d(this.x + vec.x, this.y + vec.y);
    }

    function addMe(vec) {
      this.x += vec.x;
      this.y += vec.y;
      return this;
    }

    function sub(vec) {
      return new Vec2d(this.x - vec.x, this.y - vec.y);
    }
    
    function subMe(vec) {
      this.x -= vec.x;
      this.y -= vec.y;
      return this;
    }

    function scale(s) {
      return new Vec2d(this.x*s, this.y*s);
    }

    function scaleMe(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }

    function length() {
      return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    function normalize(to) {
      var curLen = this.length(),
          len;

      to = to || 1;
      len = curLen === 0 ? 0 : to/curLen;

      return this.scale(len);
    }

    function normalizeMe(to) {
      var curLen = this.length(),
          len;

      to = to || 1;
      len = curLen === 0 ? 0 : to / curLen;

      return this.scaleMe(len);
    }

    function cross(vec) {
      return this.x*vec.y - vec.x*this.y; 
    }

    function dot(vec) {
      return this.x*vec.x + this.y*vec.y;
    }

    function copy() {
      return new Vec2d(this.x, this.y);
    }

    return {
      init: init,
      add: add,
      addMe: addMe,
      sub: sub,
      subMe: subMe,
      scale: scale,
      scaleMe: scaleMe,
      length: length,
      normalize: normalize,
      normalizeMe: normalizeMe,
      copy: copy
    };
  });

  exports.Vec2d = Vec2d;
});

