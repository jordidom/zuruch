window.onload = function() {
    setTimeout(function() {
      $('#onload').fadeOut();
      $('body').revoveClass('hidden');
    }, 1500);
}