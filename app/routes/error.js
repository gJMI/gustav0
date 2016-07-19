import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error(error, transition) {
      Ember.Logger.debug("Almost there :-) ...");
    },
    onResourceError(resp) {
    this.controllerFor('application').setProperties({
      'errors': resp.errors,
      'errorMessage': resp.message
    });
  }
  }
});
