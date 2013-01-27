
define('Monster', ['lib/fiber.min', 'renderable/RenderObject', 'AI'], function(Fiber, ro, ai) {
  var Monster = ro.RenderObject.extend(function(base) {

    function update() {
      this.process();

      base.update.call(this);
    }

    function init(conf) {
      conf.vel = conf.vel || {x: 0, y: 0},
      conf.acc = conf.acc || {x: 0, y: 0},
      conf.graphics = conf.graphics || (new createjs.Graphics()).beginFill('rgb(255,0,255)')
                                                                .drawCircle(10,10,5);

      this.speed = conf.speed || 2;

      this.addInterest(conf.player);

      base.init.call(this, conf);
    }

    return {
      init: init,
      update: update
    };
  });

  Fiber.mixin(Monster, ai.AI);

  exports.Monster = Monster;


  
});
