'use strict';

/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , io = require('socket.io')
  , routes = require('./routes')
  , controls = require('./lib/commands')
  , api = require('./routes/api')
  , path = require('path')
  , debug = require('debug')('ar-drone-client');


var app = express();
var server = http.createServer(app);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// express routes
app.get('/', routes.index);

app.get('/api/frontCam', api.frontCam);

// socket.io server
io = io.listen(server);

// socket.io connections
io.sockets.on('connection', function (socket) {
  socket.on('command', function (cmd) {
    controls[cmd.command]();
  });
});

// express server
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});