import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  readme: DS.attr('string'),
  releases: DS.attr(),
  author: DS.attr('string'),
  creationDate: DS.attr('date'),
  rating: DS.attr(),
  lastUpdated: DS.attr('date'),
  downloads: DS.attr()
});
