var socket = io();

socket.on('connect', function () {
  console.log('connected to socket.io server');
});

socket.on('message', function (message) {
  var momentTimeStamp = moment.utc(message.timestamp);
  console.log('new message:');
  console.log(message.text);

  jQuery('.messages').append('<p>' + '<strong>' + momentTimeStamp.local().format('hh:mm a') + '</strong>' + ': ' + message.text + '</p>');
});
//also concat formatted time stamp

//Handles submitting of new message

var $form = jQuery('#message-form');

$form.on('submit', function (event) {
  event.preventDefault();

  socket.emit('message', {
    text: $form.find('input[name=message]').val()
  });

  $form.find('input[name=message]').val('');
  $('input[name=message]').focus();
});
