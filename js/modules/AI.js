
define('AI', ['Vectors'], function(Vectors) {

  exports.AI = function(base) {

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
