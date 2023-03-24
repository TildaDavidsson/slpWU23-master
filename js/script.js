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
    
    const infoBoxes = document.querySelectorAll('.info-box, .graffbox');
    infoBoxes.forEach(infoBox => {
      const infoBtn = infoBox.querySelector('.info-btn');
      const infoContent = infoBox.querySelector('.info-content');
      const downArrow = infoBox.querySelector('.downarrow'); 
      infoBtn.addEventListener('click', () => {
        infoContent.classList.toggle('active');
        downArrow.classList.toggle('active');
        infoBox.classList.toggle('active');
        if (infoBox.classList.contains('graffbox')) {
          infoBox.classList.toggle('active2');
        }
      });
    });
    document.addEventListener('DOMContentLoaded', () => {
     const secondInfoBox = document.querySelector('.second-info-box');
     const secondInfoContent = document.querySelector('.second-info-content');
     const secondInfoBtn = document.querySelector('#second-info-btn');
     const downArrow = document.querySelector('.downarrow');

     secondInfoBtn.addEventListener('click', () => {
       secondInfoContent.classList.toggle('active');
       secondInfoBox.classList.toggle('active');
       downArrow.classList.toggle('active');
      });
    });
});




