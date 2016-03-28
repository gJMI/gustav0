import DS from 'ember-data';

export default DS.Model.extend({
  productI18N: DS.attr('string'),
  accountno: DS.attr(),
  status: DS.attr(),
  balance: DS.attr(),
  flags: DS.attr(),
  actualBalance: Ember.computed('balance', function () {
    var pom=Math.pow(.1,this.get('balance.precision'))*this.get('balance.value');
    return(Math.round(pom * 100) / 100);
  })
});
