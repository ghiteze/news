(function () {
  'use strict';

  var slide, slides, counter, speed;

  slide   = document.getElementById('slide');
  if (slide) {
    slides  = slide.getElementsByClassName('slide');
    speed   = 5000;
    counter = 0;

    slides[counter].classList.add('active');

    setInterval(function () {
      slides[counter].classList.remove('active');
      counter++;
      if (counter >= slides.length) {
        counter = 0;
      }
      slides[counter].classList.add('active');
    }, speed);
  }

}());
