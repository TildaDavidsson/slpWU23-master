(function() {
    document.addEventListener('DOMContentLoaded', function() {
      const infoBoxes = document.querySelectorAll('.info-box');
      const content = document.getElementById('info-content');
      infoBoxes.forEach(infoBox => {
         const infoBtn = infoBox.querySelector('.info-btn');
         const infoContent = infoBox.querySelector('.info-content');
         const downArrow = infoBox.querySelector('.downarrow'); 
           infoBtn.addEventListener('click', () => {
             infoContent.classList.toggle('active');
             downArrow.classList.toggle('active');
             infoBox.classList.toggle('active');
            });
        });
        const secondInfoBox = document.querySelector('.second-info-box');
        const secondInfoContent = document.querySelector('.second-info-content');
        const infoBtn2 = document.querySelector('.second-info-btn');
        const secondDownArrow = secondInfoBox.querySelector('.seconddownarrow'); 
         infoBtn2.addEventListener('click', () => {
           secondInfoContent.classList.toggle('active');
           secondDownArrow.classList.toggle('active');
           secondInfoBox.classList.toggle('active');
          });
    });
})();