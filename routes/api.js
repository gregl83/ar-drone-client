'use strict';

var arDrone = require('ar-drone');
var client = arDrone.createClient();


/*
 * GET api takeoff.
 */

exports.takeoff = function() {
  console.log('>> takeoff motherfuckers');
  client.takeoff();
};


/*
 * GET api land.
 */

exports.land = function() {
  client.land();
};


/*
 * GET api stop.
 */

exports.stop = function() {
  client.stop();
};


/*
 * GET api frontCam.
 */

exports.frontCam = function(req, res){
  var stream = client.getPngStream({log: console.log});
  stream.on('data', function(buffer) {
    res.write(buffer);
  });
};
