import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  "reference": DS.attr('string'),
  "amount": DS.attr(),
  "constantSymbol": DS.attr(),
  "variableSymbol": DS.attr(),
  "specificSymbol": DS.attr(),
  actualBalance: Ember.computed('amount', function () {
    console.log("actual balance computed");
    var pom=Math.pow(0.1,this.get('amount.precision'))*this.get('amount.value');
    return(pom.toFixed(2));
  })
});
