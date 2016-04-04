import Ember from 'ember';

export function formatIban(params/*, hash*/) {
  var old_iban=params[0];
  const SPRTR=" ";
  var new_iban = old_iban.slice(0,4)+SPRTR+old_iban.slice(4,8)+SPRTR+old_iban.slice(8,12)+SPRTR+old_iban.slice(12,16)+SPRTR+old_iban.slice(16,20)+SPRTR+old_iban.slice(20);
  return(new_iban);
}

export default Ember.Helper.helper(formatIban);
