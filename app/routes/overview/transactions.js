import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
   let query = {account: param.id};
   return this.store.query('transaction', query);
  },
  beforeModel: function() {
    // Assume the 'loading' class displays an overlay with a loading animation
    Ember.$("#loading").css("display", "block");
  },
  afterModel: function() {
    console.log("F2");
    Ember.$("#loading").css("display", "none");
  }
});
