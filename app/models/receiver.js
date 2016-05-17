import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr(),
    bankCode: DS.attr(),
    prefix: DS.attr(),
    iban: DS.attr(),
    bic: DS.attr()
});