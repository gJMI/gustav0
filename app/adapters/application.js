import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/webapi/v3/netbanking/my',
  host: 'http://localhost:3000',
  headers: {
    "WEB-API-key":"4d612e35-c45f-4129-b59a-5cafea9fcb6a",
    "Authorization":"bearer 3/e6rCMJK7Zwf4ZhkyeVe6rHQ14vJHjY7UX5PU1u9H2Uw4rLB8OtxgdB7Q7Z39jYPX"
  }
});



