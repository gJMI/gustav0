import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

//Ember.onerror = function (error) {
//  console.log('Ember.onerror handler', error.message);
//};

Ember.RSVP.on('error', function (error) {
  console.log('Ember.RSVP error handler', error);
  //App.get('router').transitionTo('error');
  //window.location.replace("/error");
});

Ember.Logger.error = function (message, cause, stack) {
  console.log('Ember.Logger.error handler', message, cause, stack);
};

export default App;
