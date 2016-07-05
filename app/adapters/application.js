import DS from 'ember-data';
import Ember from 'ember';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api/webapi/v3/netbanking/my',
  host: 'http://localhost:3000',
  headers: Ember.computed('ENV.APP.bearer', function() {
    return {
      "WEB-API-key":"4d612e35-c45f-4129-b59a-5cafea9fcb6a",
      "Authorization": "bearer "+ENV.APP.bearer
     };
  })
});



