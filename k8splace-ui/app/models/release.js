import DS from 'ember-data';

export default DS.Model.extend({
  version: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date'),
  rating: DS.attr(),
  manifests: DS.attr(),
  packageId: DS.attr()
});
