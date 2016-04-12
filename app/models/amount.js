import DS from 'ember-data';

export default DS.Model.extend({
  currency: DS.attr('string'),
  precision: DS.attr('number'),
  value: DS.attr('number')
});
