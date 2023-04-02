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
    
  const imageTwo = document.querySelector('.image:nth-child(2)');
  const smallworld = document.getElementById('smallworld');
  const imageThree = document.querySelector('.image:nth-child(3)');
  const azucar = document.getElementById('azucar');
  const imageFour = document.querySelector('.image:nth-child(4)');
  const something = document.getElementById('something');
  const imageFive = document.querySelector('.image:nth-child(5)');
  const snoop = document.getElementById('snoop');
  const imageSix = document.querySelector('.image:nth-child(6)');
  const run = document.getElementById('run');
  const image= document.querySelector('.image');
  const channel = document.getElementById('channel');

  imageTwo.addEventListener('click', () => {
    smallworld.style.opacity = 1;
    smallworld.style.zIndex = 20;
  });
  imageThree.addEventListener('click', () => {
    azucar.style.opacity = 1;
    azucar.style.zIndex = 20;
  });
  imageFour.addEventListener('click', () => {
    something.style.opacity = 1;
    something.style.zIndex = 20;
  });
  imageFive.addEventListener('click', () => {
    snoop.style.opacity = 1;
    snoop.style.zIndex = 20;
  });
  imageSix.addEventListener('click', () => {
    run.style.opacity = 1;
    run.style.zIndex = 20;
  });
  image.addEventListener('click', () => {
    channel.style.opacity = 1;
    channel.style.zIndex = 20;
  });

  document.addEventListener('click', (event) => {
    if (event.target !== imageTwo && event.target !== smallworld) {
     smallworld.style.opacity = 0;
     smallworld.style.zIndex = 1;
    }
    if (event.target !== imageThree && event.target !== azucar) {
      azucar.style.opacity = 0;
      azucar.style.zIndex = 2;
    }
    if (event.target !== imageFour && event.target !== something) {
      something.style.opacity = 0;
      something.style.zIndex = 3;
    }
    if (event.target !== imageFive && event.target !== snoop) {
      snoop.style.opacity = 0;
      snoop.style.zIndex = 4;
    }
    if (event.target !== imageSix && event.target !== run) {
      run.style.opacity = 0;
      run.style.zIndex = 5;
    }
    if (event.target !== image && event.target !== channel) {
      channel.style.opacity = 0;
      channel.style.zIndex = 0;
    }
  });
});




