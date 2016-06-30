import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

    queryRecord(store, type, query) {
    /*jshint unused:false*/   
        
    var url = `${this.host}/api/webapi/v2/gapi/my/images/user-image?variant=retina`;

    var key = this.headers["WEB-API-key"];
    var auth = this.headers["Authorization"];

    return new Ember.RSVP.Promise(function (resolve, reject) {

      Ember.Logger.debug("HEAD: " + auth + key);

      Ember.$.ajaxSetup({
        beforeSend: function (xhr) {
          xhr.setRequestHeader("WEB-API-key", key);
          xhr.setRequestHeader("Authorization", auth);
        }
      });

      Ember.$.get(url).then(function (data) {

        //Ember.Logger.debug("Raw userimage data: " + data);

        var payload = {};
        payload.userimage= {};

        //payload.image = btoa(data);
        payload.userimage.id = 1212;
        payload.userimage.image = data;
        //Ember.Logger.debug("Payload: " + JSON.stringify(payload));

        Ember.run(null, resolve, payload);

      }, function (jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.Logger.debug("Problem with getting Userimage "+JSON.stringify(jqXHR));
        //Ember.run(null, reject, jqXHR);
        Ember.RSVP.reject(jqXHR);
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
