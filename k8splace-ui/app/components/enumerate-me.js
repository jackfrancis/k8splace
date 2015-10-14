import Ember from 'ember';

export default Ember.Component.extend({
  numTimes: Ember.computed('times', function () {
    var arr = [], i;
    for (i = 0; i < this.get('times'); i += 1) {
      arr.push('enumerate me');
    }
    return arr;
  })
});
