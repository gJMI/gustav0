import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/webapi/v3/netbanking/my',
  host: 'http://localhost:3000',
  headers: {
    "WEB-API-key":"4d612e35-c45f-4129-b59a-5cafea9fcb6a",
    "Authorization":"bearer 3/qAeVUh5EohTZPaAlpLA5tjbhiHAFQPtlfZ0b3863dz7TX3HPFpE8TzqlNApBAKlg"
  }
});



