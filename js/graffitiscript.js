(function() {
    document.addEventListener('DOMContentLoaded', function() {
      const infoBoxes = document.querySelectorAll('.info-box, .graffbox');
      const content = document.getElementById('info-content');
      const button = document.getElementById('second-info-btn');
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
        button.addEventListener('click', function() {
            content.classList.toggle('show');
        });
    });
})();