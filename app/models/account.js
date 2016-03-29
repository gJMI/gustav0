import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  productI18N: DS.attr('string'),
  accountno: DS.attr(),
  status: DS.attr(),
  balance: DS.attr(),
  flags: DS.attr(),
  actualBalance: Ember.computed('balance', function () {
    var pom=Math.pow(0.1,this.get('balance.precision'))*this.get('balance.value');
    return(pom.toFixed(2));
  })
});
