import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function () {
      var store = this.store,
          date = new Date(),
          pkg,
          that = this;

      pkg = store.createRecord('package', {
        id: 9999,
        name: 'jackfrancis/' + this.get('name'),
        description: this.get('description'),
        author: 'Jack Francis',
        creationDate: date,
        lastUpdated: date,
        rating: 0,
        downloads: 0,
        releases: []
      });

      pkg.save().then(transitionToPackage).catch(failure);

      function transitionToPackage (pkg) {
        that.transitionToRoute('package', pkg);
      }
    }
  }
});
