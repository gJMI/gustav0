import Ember from 'ember';

export function formatProductName(params/*, hash*/) {
  var old_name=params[0];
  var new_name = old_name;
  if (old_name.length > 20) {
    new_name=old_name.slice(0,20)+"…";
  }
  return(new_name);
}

export default Ember.Helper.helper(formatProductName);
