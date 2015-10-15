import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('package', {
    path: '/packages/:package_id'
  });
  this.route('new-package', {});
});

export default Router;
