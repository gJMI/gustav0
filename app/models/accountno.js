import DS from 'ember-data';

export default DS.Model.extend({
  "iban": DS.attr('string'),
  "accountNumber": DS.attr('string'),
  "accountPrefix": DS.attr('string'),
  "bankCode": DS.attr('string'),
  "bic": DS.attr('string')
});
