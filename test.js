document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    $('.image').click(function() {
      $('.image').removeClass('clicked');
      $(this).addClass('clicked');
      $('.text-container').removeClass('active');
      $(this).next('.text-container').addClass('active');
    });
    var text = $(this).attr('data-text');
    
    // Set the text square content to the retrieved text
    $('.text-square').text(text);
  });
});  
  