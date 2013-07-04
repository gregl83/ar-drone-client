var socket = io.connect('http://localhost');

socket.on('connected', function (data) {
  // TODO identify connected state
  console.log(data);

  socket.emit('takeoff', { my: 'data' });
});

socket.on('log', function (data) {
  console.log(data);
});


function emit(cmd) {
  socket.emit('command', {command: cmd});
}

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 38: emit('up'); // cursor up
      break;
    case 40: emit('down'); // cursor down
      break;
    case 87: emit('forward'); // W
      break;
    case 65: emit('left'); // A
      break;
    case 83: emit('backward'); // S
      break;
    case 68: emit('right'); // D
      break;
    case 32: emit('switchPower'); // Space
      break;
    default: return;
  }
});