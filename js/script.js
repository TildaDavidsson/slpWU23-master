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
    const infoBoxes = document.querySelectorAll('.info-box');

    infoBoxes.forEach(box => {
      box.addEventListener('click', () => {
        box.querySelector('.info-content').classList.toggle('active');
      });
    }); 
});




