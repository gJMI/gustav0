import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'webapi/api/v1/netbanking/my',
  host: 'https://www.csas.cz',
  headers: {
    "WEB-API-key": "0bca73a4-0ebb-4837-a841-7dcb189e9c02",
    "Authorization": "Bearer demo_b8d3fb54a86b63641727eba34fd638ef"
  }
});
