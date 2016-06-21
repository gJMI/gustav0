import Ember from 'ember';

export default Ember.Route.extend({
  model() { 
    return Ember.RSVP.hash({
      profile: this.store.queryRecord('profile','profile'),
      userimage: this.store.queryRecord('userimage','userimage')
    });
  },

  setupController(controller, model) {
    Ember.Logger.debug("Setting up models...");
    controller.setProperties(model);
    //controller.set('profile', model.profile);
    //controller.set('userimage', model.userimage);
    // or, more concisely:
  },

  afterModel(model) {
    Ember.Logger.debug(model.profile.get("firstname"));
  }

});
