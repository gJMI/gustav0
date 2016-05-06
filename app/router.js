import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts',function() {
    this.route('transactions',{ path: '/:id/transactions' });
  });
  this.route('profile');
  this.route('overview',function() {
    this.route('transactions',{ path: '/:id/transactions' });
    this.route('domestic',{ path: '/domestic' });
  });
  this.route('account',{ path: '/accounts/:id' });
  this.route('transactions',{ path: '/accounts/:id/transactions' });
  this.route('domestic');
});

export default Router;
