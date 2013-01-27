
define('AI', function() {

  exports.AI = function(base) {

    function normalize(norm, pos1, pos2) {
      var posDiff = pos2 ? positionDifference(pos1, pos2) : pos1,
      dist = Math.sqrt(Math.pow(posDiff.x,2)+Math.pow(posDiff.y,2)),
      scale = dist ? norm/dist : 0;

      return {x: posDiff.x * scale, y: posDiff.y * scale};
    }

    function positionDifference(pos1, pos2) {
      return {x: pos1.x - pos2.x, y: pos1.y - pos2.y};
    }

    function addInterest(cat, interest) {
      if (this.interests && this.interests[cat]) {
        this.interests[cat].push(interest);
      }
    }

    function addInterestCat(cat) {
      if (!this.interests) {
        this.interests = {};
      }

      if (!this.interests[cat]) {
        this.interests[cat] = [];
      }
    }

    function addBehavior(cat, behavior) {
      if (!this.behaviors) {
        this.behaviors = {};
      }

      this.behaviors[cat] = behavior;
    }

  function distance(tar) {
    var myPos = this.getPosition();
    return Math.sqrt((tar.x -= myPos.x) * tar.x + (tar.y -= myPos.y) * tar.y);
  }

  function process() {
    var cat, i, interests = this.interests, behaviors = this.behaviors;

    if (!behaviors || !interests) {
      return;
    }

    for (cat in interests) {
      if (behaviors[cat]) {
        behaviors[cat].call(this, interests[cat]);
      }
    }

    
  }

  return {
    process: process,
    addInterest: addInterest,
    addInterestCat: addInterestCat,
    addBehavior: addBehavior,
    positionDifference: positionDifference,
    normalize: normalize,
    distance: distance
  };
  };
});
