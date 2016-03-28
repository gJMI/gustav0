import DS from 'ember-data';

export default DS.Model.extend({
  balanceCzk: DS.attr('number'),
  currency: DS.attr('string'),
  precision: DS.attr('number'),
  value: DS.attr('number')
});
