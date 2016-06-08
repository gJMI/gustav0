import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('overview',function() {
    this.route('transactions',{ path: '/:id/transactions' });
    this.route('domestic',{ path: '/domestic' });
    this.route('detail', {path: '/detail/:id'});
  });
  this.route('about');
});

export default Router;
