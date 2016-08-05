(function (Js) {
  'use strict';

  var $ctrl = Js.find('#related-news-ctrl');

  if ($ctrl) {
    var $relatedNews = Js.find('#related-news');
    var $prev = $ctrl.find('.prev');
    var $next = $ctrl.find('.next');

    $next.on('click', function () {
      var scrollPos = $relatedNews.scrollLeft;
      var scrollMaxPos = $relatedNews.scrollWidth - $relatedNews.clientWidth

      var interval = setInterval(function () {
        $relatedNews.scrollLeft += 5;
        if ($relatedNews.scrollLeft >= scrollPos + 204 || $relatedNews.scrollLeft >= scrollMaxPos) {
          clearInterval(interval);
        }
      }, 1);
    });

    $prev.on('click', function () {
      var scrollPos = $relatedNews.scrollLeft;

      var interval = setInterval(function () {
        $relatedNews.scrollLeft -= 5;
        if ($relatedNews.scrollLeft < scrollPos - 204 || $relatedNews.scrollLeft <= 0) {
          clearInterval(interval);
        }
      }, 1);
    });
  }

}(Javascript));
