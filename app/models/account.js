import DS from 'ember-data';

export default DS.Model.extend({
  productI18N: DS.attr('string'),
  accountno: DS.attr()
});
