// include dependencies 
var express = require('express');
var proxy = require('http-proxy-middleware');
var fs = require('fs');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; //not checking TLS
 
//https://bezpecnost.csast.csas.cz/mep/fs/fl/oauth2/auth?client_id=georgeclient_cz&language=en&response_type=token&redirect_uri=https://george.csast.csas.cz 
 
/* 
https://bezpecnost.csast.csas.cz/mep/fs/fl/oauth2/auth?client_id=georgeclient_cz&language=en&response_type=token&redirect_uri=https://george.csast.csas.cz



HTTP/1.1 302 Moved Temporarily
Date: Tue, 21 Jun 2016 23:17:56 GMT
Server: Apache-Coyote/1.1
Strict-Transport-Security: max-age=31536000
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, X-Requested-With, Origin, Accept, Authorization
Access-Control-Max-Age: 3600
Cache-Control: no-cache
Expires: -1
Location: https://george.csast.csas.cz#access_token=3/vaAsZ1glh2dfr6gAsdmHQA1U8gbSGzExDBJp2BnX8en3OzOibf7MLBdwdRvD4U9q&token_type=bearer&expires_in=3599&scope=payments.domestic+user.profile+payments.international+transactions.history+user.settings&lang=cs
Content-Length: 0
Keep-Alive: timeout=20, max=95
Connection: Keep-Alive

*/

var options = {
        target: 'https://bezpecnost.csast.csas.cz', // target host 
        onError: function onError(err, req, res) {
          res.writeHead(500, { 'Content-Type': 'text/plain'});
          res.end('Something went wrong. And we are reporting a custom error message.');
        },
        secure: false, //do not check TLS
        onProxyRes: function onProxyRes(proxyRes, req, res) {
         //delete proxyRes.headers['access-control-allow-origin'];       // remove header from response
         //proxyRes.headers['access-control-allow-origin'] = 'http://localhost:4200';     // add new header to response  
         
         
         console.log(proxyRes.context);
        },
        autoRewrite: true,
        onProxyReq: function onProxyReq(proxyReq, req, res) {
         console.log(req.headers);
        },
        headers: {
            host: `bezpecnost.csast.csas.cz`
        }
    };

var context='/';
 
var apiProxy = proxy(context,options);
 
// use the configured `apiProxy` in web server 
var app = express();
    app.use(apiProxy);
    app.listen(3001);