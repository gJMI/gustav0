import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  "description": DS.attr('string'),
  "amount": DS.attr(),
  actualBalance: Ember.computed('amount', function () {
    console.log("actual balance computed");
    var pom=Math.pow(0.1,this.get('amount.precision'))*this.get('amount.value');
    return(pom.toFixed(2));
  })
});
