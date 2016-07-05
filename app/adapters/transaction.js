import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({

  query(store, type, query) {
    /*jshint unused:false*/   
    
    var account = query["account"];
    var search= query["search"];
    
    Ember.Logger.debug("account: " + account);
    Ember.Logger.debug("search: " + search);
    
    var url = `${this.host}/api/webapi/v2/gapi/my/transactions?pageSize=25&id=${account}&q=${search}`;

       var key = this.headers.get(this.headers,'Authorization')["WEB-API-key"];
    var auth = this.headers.get(this.headers,'Authorization')["Authorization"];

    return new Ember.RSVP.Promise(function (resolve, reject) {

      Ember.Logger.debug("HEAD: " + auth + key);

      Ember.$.ajaxSetup({
        beforeSend: function (xhr) {
          xhr.setRequestHeader("WEB-API-key", key);
          xhr.setRequestHeader("Authorization", auth);
        }
      });

      Ember.$.getJSON(url).then(function (data) {

        var payload = {};

        payload.transactions = data.collection;

        //Ember.Logger.debug("Payload: " + JSON.stringify(payload));

        Ember.run(null, resolve, payload);

      }, function (jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});

// /api/webapi/v2/gapi/my/transactions?pageSize=50&id=AA0639BF461DDB2B2DBCB6AEC715A7CFDEC07227
// https://george.csast.csas.cz/api/webapi/v2/gapi/my/transactions?pageSize=50&id=AA0639BF461DDB2B2DBCB6AEC715A7CFDEC07227&_=1463467673513
// http://localhost:3000/api/webapi/v3/netbanking/my/transactions?account=AA0639BF461DDB2B2DBCB6AEC715A7CFDEC07227
