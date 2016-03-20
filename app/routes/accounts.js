import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return this.store.findAll('account');
 }
});

/*
GET https://www.csas.cz/webapi/api/v1/netbanking/my/accounts HTTP/1.1
Host: www.csas.cz
Connection: keep-alive
Cache-Control: max-age=0
Accept: application/json, text/plain, *
Origin: https://mygustav.cz
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36
WEB-API-key: 0bca73a4-0ebb-4837-a841-7dcb189e9c02
Authorization: Bearer demo_b8d3fb54a86b63641727eba34fd638ef
Referer: https://mygustav.cz/
Accept-Encoding: gzip, deflate, sdch
Accept-Language: cs,en-US;q=0.8,en;q=0.6,nl;q=0.4



*/
