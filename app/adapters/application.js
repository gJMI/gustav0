import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/webapi/v3/netbanking/my',
  host: 'http://localhost:3000',
  headers: {
    "WEB-API-key":"4d612e35-c45f-4129-b59a-5cafea9fcb6a",
    "Authorization":"bearer 3/76VQ6EmL6bYc4tP4tYZqj3k2R6MYwhWsH7iFs8Jb0Dn5gIAPileoiKjfBXEDnSZ6"
  }
});



