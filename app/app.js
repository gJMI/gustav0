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

export default App;

Ember.$.ajaxSetup({
   headers: {"Authorization": "Bearer demo_b8d3fb54a86b63641727eba34fd638ef",
 "WEB-API-key": "0bca73a4-0ebb-4837-a841-7dcb189e9c02"}
});
