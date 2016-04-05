import Ember from 'ember';

export function formatCurrencyNumber(params/*, hash*/) {
  var pom=params[0].toString();
  return(pom.replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
}

export default Ember.Helper.helper(formatCurrencyNumber);
