const fs = require('fs');
const http = require('http');
const cookieParser = require('cookie-parser');
const https = require('https');
const router = require('./api/auth/facebook');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static('public'));
app.use('/api/auth/facebook', router);

const key = fs.readFileSync('certificates/server.key', 'utf8');
const cert = fs.readFileSync('certificates/server.crt', 'utf8');
const credentials = { key, cert };

const httpsServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);

httpsServer.listen(8443);
httpServer.listen(8080);