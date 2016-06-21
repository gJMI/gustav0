import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
   Ember.Logger.debug("Detail called " + param.id);
   var pom = this.store.peekRecord('account',param.id);
   if (pom===null) {
       Ember.Logger.debug("Cached detail not found, trying emmit a request");
       pom = this.store.findRecord('account',param.id);
   }
   Ember.Logger.debug("Return of detail call: "+pom);
   return(pom);
  }
});
