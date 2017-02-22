var person = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
console.log(person + " joined " + room + "!");
var socket = io();

socket.on('connect', function () {
  console.log('connected to socket.io server');
});

socket.on('message', function (message) {
  var momentTimeStamp = moment.utc(message.timestamp);
  var $message = jQuery('.messages');
  console.log('new message:');
  console.log(message.text);

  $message.append('<p><strong>' + message.name + ' ' + momentTimeStamp.local().format('hh:mm a') + '</strong></p>');
  $message.append('<p>' + message.text + '</p>');
});
//also concat formatted time stamp

//Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function (event) {
  event.preventDefault();

  var $message = $form.find('input[name=message]');

  socket.emit('message', {
    name: person,
    text: $message.val()
  });

  $message.val('');

});
