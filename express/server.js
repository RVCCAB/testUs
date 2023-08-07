const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const serverless = require("serverless-http");

const app = express();

router.use('/', createProxyMiddleware({
	target: 'https://lisederslerim.com',
	changeOrigin: true,
	secure: false, // If you want to verify the SSL Certs
	onProxyRes: function(proxyRes, req, res){
		proxyRes.headers['Access-Control-Allow-Origin'] = '*';
	},
	cookieDomainRewrite: ""
}));

app.use("/.netlify/functions/", router);

module.exports.handler = serverless(app);
