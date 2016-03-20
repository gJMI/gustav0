import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord(store, type, query) {
      var url = `${this.host}${this.namespace}/profile`;

      return this.ajax(url, 'GET', null);
    }
});
