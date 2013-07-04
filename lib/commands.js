var arDrone = require('ar-drone')
  , debug = require('debug')('ar-drone-client') // $> DEBUG=ar-drone-client node app.js
  , client = arDrone.createClient();

/**
 * Takeoff or land depending on the current state
 */
module.exports.switchPower = function () {
  debug('switchPower');
};


/**
 * Move up
 */
module.exports.up = function () {
  debug('up');
  client.up(0.1);
};


/**
 * Move down
 */
module.exports.down = function () {
  debug('down');
  client.down(0.1);
};


/**
 * Move forward
 */
module.exports.forward = function () {
  debug('forward');
  client.front(0.1);
};


/**
 * Move backwards
 */
module.exports.backward = function () {
  debug('backward');
  client.back(0.1);
};


/**
 * Rotate left/counterclockwise
 */
module.exports.left = function () {
  debug('left');
  client.counterClockwise(0.1);
};


/**
 * Rotate right/clockwise
 */
module.exports.right = function () {
  debug('right');
  client.clockwise(0.1);
};