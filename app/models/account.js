import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  productI18N: DS.attr('string'),
  accountno: DS.attr(),
  status: DS.attr(),
  balance: DS.attr(),
  flags: DS.attr(),
  product: DS.attr('number'),
  actualBalance: Ember.computed('balance', function () {
    var pom=Math.pow(0.1,this.get('balance.precision'))*this.get('balance.value');
    return(pom.toFixed(2));
  }),
  productColorClass: Ember.computed('product', function() {
    var pom="w3-blue";
    console.log(this.get('product'));
    switch(this.get('product')) {
      case 12: pom="w3-yellow";break; //card account
      case 10: pom="w3-green";break; //loan account
      case 3: pom="w3-red";break; //SPZ account
      case 15: pom="w3-black";break; //mortage
    }
    return(pom);
  })
});
