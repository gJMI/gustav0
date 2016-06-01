import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(param) {
   let query = {account: param.id, search: param.search};
   return this.store.query('transaction', query);
  },
  beforeModel: function() {
    // Display loading message
    Ember.$("#modal02").css("display", "block");
    Ember.Logger.debug("pre-F2");
  },
  afterModel: function() {
    Ember.Logger.debug("F2");
    Ember.$("#modal02").css("display", "none");
  }
});
