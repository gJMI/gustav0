import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts');
  this.route('profile');
  this.route('account',{ path: '/accounts/:id' });
});

export default Router;
