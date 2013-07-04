'use strict';

var arDrone = require('ar-drone');
var client = arDrone.createClient();

/*
 * GET api frontCam.
 */

exports.frontCam = function(req, res){
  var stream = client.getPngStream({log: console.log});
  stream.on('data', function(buffer) {
    res.write(buffer);
  });
};
