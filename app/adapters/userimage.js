import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

  handleResponse: function(status, headers, payload) {

    // Fix payload if not present
    if (typeof payload === 'undefined') {
      payload = {};
    }

    // If we have an error
    if (String(status).charAt(0) === '4' || String(status).charAt(0) === '5') {

      // Push error in payload if not exists
      if (!payload.hasOwnProperty('errors')) {
        payload = {}; // Clear payload
        payload.errors = []; // Set empty array
      }

    }

    status = 200;

    // Everything seems fine, continue
    return this._super(status, headers, payload);
  },

  queryRecord(store, type, query) {
    /*jshint unused:false*/

    var url = `${this.host}/api/webapi/v2/gapi/my/images/user-image?variant=retina`;

    //Ember.Logger.debug("fuck1");

    //var key = this.headers["WEB-API-key"];
    //var auth = this.headers["Authorization"];

    //debugger;

    var key = this.headers.get(this.headers, 'Authorization')["WEB-API-key"];
    var auth = this.headers.get(this.headers, 'Authorization')["Authorization"];

    //Ember.Logger.debug("fuck2");

    return new Ember.RSVP.Promise(function(resolve, reject) {

      Ember.Logger.debug("HEAD: " + auth + key);

      Ember.$.ajaxSetup({
        beforeSend: function(xhr) {
          xhr.setRequestHeader("WEB-API-key", key);
          xhr.setRequestHeader("Authorization", auth);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
          //alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
          Ember.Logger.debug("Apparently image not found ('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);");
         }   
      });

      Ember.$.get(url).then(function(data) {

        Ember.Logger.debug("Raw userimage data: " + data);

        var payload = {};
        payload.userimage = {};

        //payload.image = btoa(data);
        payload.userimage.id = 1212;
        payload.userimage.image = data;
        //Ember.Logger.debug("Payload: " + JSON.stringify(payload));

        Ember.run(null, resolve, payload);

      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.Logger.debug("Problem with getting Userimage " + JSON.stringify(jqXHR));
        //Ember.run(null, reject, jqXHR);
        Ember.run(null, resolve, jqXHR);

      });
    });
  }
});

/*
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return new RSVP.Promise(function(resolve, reject) {
      $.get("https://my-api.example.com/ember-model")
      .then(resolve).fail(reject);
    });
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var model1 = new RSVP.Promise(function(resolve, reject) {
      return $.get("https://my-api.example.com/ember-model").then(resolve).fail(reject);
    });
    var model2 = new RSVP.Promise(function(resolve, reject) {
      return $.get("https://my-api.example.com/ember-model2").then(resolve).fail(reject);
    });

    return RSVP.Promise.all([model1, model2])
    .catch(function(error) {
      console.warn(error); // I live on the edge
      return {model1: "I still got", model2: "your back"};
    });
  }
});
*/