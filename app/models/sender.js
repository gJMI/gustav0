import DS from 'ember-data';

export default DS.Model.extend({
    bankCode: DS.attr(),
    number: DS.attr(),
    prefix: DS.attr(),
    bic: DS.attr(),
    iban: DS.attr()
});