import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
   let query = {account: param.id};
   return this.store.query('transaction', query);
  },
  beforeModel: function() {
    // Assume the 'loading' class displays an overlay with a loading animation
    Ember.$("#id02").css("display", "block");
    console.log("pre-F2");
  },
  afterModel: function() {
    console.log("F2");
    Ember.$("#id02").css("display", "none");
  }
});
