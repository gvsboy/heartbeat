
define('Monster', ['lib/fiber.min', 'renderable/RenderObject', 'AI'], function(Fiber, ro, ai) {
  var Monster = ro.RenderObject.extend(function(base) {

    function update() {
      this.dir.scaleMe(0);
      this.process();

      base.update.call(this);
    }

    function init(conf) {
      conf.graphics = conf.graphics || (new createjs.Graphics()).beginFill('rgb(255,0,255)')
                                                                .drawCircle(10,10,5);

      conf.speed = conf.speed || 2;

      this.addInterestCat('food');
      this.addInterestCat('ally');

      this.addBehavior('food', function(foods) {
        var closestFood = this.closest(foods);
          
        // direct path
        var pureDiff = closestFood.getPosition().sub(this.getPosition());
        this.dir.addMe(pureDiff);
        
      });

      this.addBehavior('ally', function(allies) {
        // Try to avoid getting too close
        
      });

      this.addInterest('food', conf.player);

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
