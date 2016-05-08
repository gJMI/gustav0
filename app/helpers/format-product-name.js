import Ember from 'ember';

export function formatProductName(params/*, hash*/) {
  var old_name=params[0];
  var new_name = old_name;
  if (old_name.length > 25) {
    new_name=old_name.slice(0,24)+"…";
  }
  return(new_name);
}

export default Ember.Helper.helper(formatProductName);
