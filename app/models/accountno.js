import DS from 'ember-data';

export default DS.Model.extend({
  "cz-iban": DS.attr('string'),
  "cz-bic": DS.attr('string'),
  "number": DS.attr('string'),
  "prefix": DS.attr('string'),
  "bankCode": DS.attr('string')
});
