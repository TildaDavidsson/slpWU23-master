<<<<<<< HEAD
/**document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    image.addEventListener('click', () => {
      image.classList.toggle('image--enlarged');
    });
  });
});
  **/
=======
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
});
  
>>>>>>> 1f5021ec4a05f424b7f9bba576916ceb161fc83b
