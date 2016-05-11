import Ember from 'ember';

export function formatAccount(params/*, hash*/) {
  var old_iban=params[0];
  
  //var bankCode = old_iban.slice(5,7);
  var prefixAccountNumber = old_iban.slice(8,13).replace(/^0+/, '');
  var accountNumber = old_iban.slice(14,24).replace(/^0+/, '');
  
  var account;
  
  if (prefixAccountNumber === "") 
    { account = accountNumber; }
  else
    {account = prefixAccountNumber + "-" + accountNumber;}
  
  return(account);
  
}

export default Ember.Helper.helper(formatAccount);
