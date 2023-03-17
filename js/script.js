document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
      $('.image').click(function() {
        $('.image').removeClass('clicked');
        $(this).addClass('clicked');
      });
      
      $(document).click(function(event) {
        if (!$(event.target).hasClass('image')) {
          $('.image').removeClass('clicked').removeAttr('style');
        }
      });
    });  


  $('.info-btn').on('click', function() {
    $(this).parent().toggleClass('active');
  }); 
   
  $('.info-btn').on('click', function() {
    $(this).find('.downarrow').toggleClass('active');
  });
});




