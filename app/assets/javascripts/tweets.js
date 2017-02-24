// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ready', function() {

  $('#new_tweet').submit(function(event) {
    event.preventDefault();
    console.log('prevent default');

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'HTML'

    }).done(function(responseData) {
      console.log('came back successfully');
      console.log(responseData);
      $('.tweets').prepend(responseData);
      document.getElementById('new_tweet').reset();
      $('#create-tweet').prop('disabled', false);

    }).fail(function() {
      console.log('failed');

    }).always(function() {
      console.log('Always executing');
    });
  });

});
