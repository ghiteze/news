(function (Js) {
  'use strict';

  var header = Js.find('header');
  var headerFixed = 'header-animation';
  window.addEventListener('scroll', function () {
    if (window.scrollY > 130) {
      header.classList.add(headerFixed);
    }
    else {
      header.classList.remove(headerFixed);
    }
  });
}(Javascript));