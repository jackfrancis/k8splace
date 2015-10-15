import Ember from 'ember';

export default Ember.Component.extend({
  setupFunc: function () {
    $('a[data-toggle=tab]').click(function (event) {
      event.stopPropagation();
    });
    $('#release301').addClass('active');
  }.on('didInsertElement')
});
