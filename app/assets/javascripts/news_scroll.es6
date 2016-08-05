{
  let ctrl = Js.find('#related-news-ctrl');

  if (ctrl) {
    let prev = ctrl.find('.prev');
    let next = ctrl.find('.next');
    let relatedNews = Js.find('#related-news');

    next.on('click', () => {
      let scrollPos    = relatedNews.scrollLeft;
      let scrollMaxPos = relatedNews.scrollWidth - relatedNews.clientWidth;

      let interval = setInterval( () => {
        relatedNews.scrollLeft += 5;
        if (relatedNews.scrollLeft >= scrollPos + 204 || relatedNews.scrollLeft >= scrollMaxPos) {
          clearInterval(interval);
        }
      }, 1);
    });

    prev.on('click', () => {
      let scrollPos = relatedNews.scrollLeft;

      let interval = setInterval( () => {
        relatedNews.scrollLeft -= 5;
        if (relatedNews.scrollLeft < scrollPos - 204 || relatedNews.scrollLeft <= 0) {
          clearInterval(interval);
        }
      }, 1);
    });
  }
}