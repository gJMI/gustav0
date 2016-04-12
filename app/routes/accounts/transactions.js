import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
   let query = {account: param.id};
   return this.store.query('transaction', query);
  }
});
