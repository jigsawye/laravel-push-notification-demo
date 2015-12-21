var io = require('socket.io-client');

var notification = io.connect('http://localhost:3000');

notification.on('connect', function() {
  notification.emit('set-token', Notification.TOKEN);
});

notification.on('notification', function(message) {
  console.log(message);
});
