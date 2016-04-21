// include dependencies 
var express = require('express');
var proxy = require('http-proxy-middleware');
var fs = require('fs');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; //not checking TLS
 
var options = {
        target: 'https://george.csast.csas.cz', // target host 
        onError: function onError(err, req, res) {
          res.writeHead(500, { 'Content-Type': 'text/plain'});
          res.end('Something went wrong. And we are reporting a custom error message.');
        },
        secure: false, //do not check TLS
        onProxyRes: function onProxyRes(proxyRes, req, res) {
         delete proxyRes.headers['access-control-allow-origin'];       // remove header from response
         proxyRes.headers['access-control-allow-origin'] = 'http://localhost:4200';     // add new header to response  
         //console.log(proxyRes.context);
        },
        autoRewrite: true,
        onProxyReq: function onProxyReq(proxyReq, req, res) {
         console.log(req.headers);
        },
        headers: {
            host: `george.csast.csas.cz`
        }
    };

var context='/api';
 
var apiProxy = proxy(context,options);
 
// use the configured `apiProxy` in web server 
var app = express();
    app.use(apiProxy);
    app.listen(3000);