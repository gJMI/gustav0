import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(store, type, query) {
    /*jshint unused:false*/
    var url = `${this.host}/${this.namespace}/profile`;
    return this.ajax(url, 'GET', null);
  }
});