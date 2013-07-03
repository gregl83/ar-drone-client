'use strict';

/**
 * Module dependencies.
 */

var express = require('express')
  , io = require('socket.io')
  , routes = require('./routes')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path');

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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

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
  socket.emit('connected', {result: true});

  // TODO separate express/socket.io routes
  socket.on('takeoff', api.takeoff);
  socket.on('land', api.land);
  socket.on('stop', api.stop);
});


// express server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});