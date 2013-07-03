'use strict';

var arDrone = require('ar-drone');
var client = arDrone.createClient();


/*
 * GET api takeoff.
 */

exports.takeoff = function(req, res){
  client.takeoff();
  res.json({result: true});
};


/*
 * GET api land.
 */

exports.land = function(req, res){
  client.land();
  res.json({result: true});
};


/*
 * GET api stop.
 */

exports.stop = function(req, res){
  client.stop();
  res.json({result: true});
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
