var socket = io.connect('http://localhost');

socket.on('connected', function (data) {
  // TODO identify connected state
  console.log(data);

  socket.emit('takeoff', { my: 'data' });
});