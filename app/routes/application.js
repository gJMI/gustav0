import Ember from 'ember';
import ENV from '../config/environment';

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
  },

  beforeModel(params) {
    Ember.Logger.debug("Setting the key " + params.queryParams.key); 
    Ember.Logger.debug(ENV.APP);
    ENV.APP.bearer = params.queryParams.key;
  }

});
