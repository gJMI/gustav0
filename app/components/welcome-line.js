import Ember from 'ember';

export default Ember.Component.extend({
  model: function() {
     //return this.modelFor('profile');}
     return this.store.queryRecord('profile');
   }
});
