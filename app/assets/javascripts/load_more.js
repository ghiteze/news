(function (Js) {
  'use strict';

  var page = 1;
  var news = Js.find('#news');
    
  if (news) {
    var category = news.getAttribute('data-category');
    if (! category) {
      window.onscroll = function() {
        if ((window.innerHeight + window.scrollY + 0.2) >= document.body.scrollHeight) {
          ++page;

          Js.ajax.get('/articles/' + page + '.json', function (res) {
            var articles = JSON.parse(res);
            var html = '';

            if (articles) {
              Js.each(articles, function (i, article) {
                html += '<div class="article grid card">';
                html +=   '<div class="col mobile-4">';
                html +=     '<a href="/'+ article.slug +'.html">';
                html +=       '<img src="'+ article.image_src +'">';
                html +=     '</a>';
                html +=   '</div>';
                html +=   '<div class="col mobile-8">';
                html +=     '<h2><a href="/'+ article.slug +'.html">'+ article.title +'</a></h2>';
                html +=     '<div class="more">';
                html +=       '<span class="icon-categories">';
                html +=         '<a href="/category/'+ article.cat.slug +'">'+ article.cat.name +'</a>';
                html +=       '</span>';
                html +=       '<span class="icon-clock">'+ article.time +'</span>';
                html +=     '</div>';
                html +=     '<p class="hide-on-tablet-and-down">'+ article.summary +'</p>';
                html +=   '</div>'
                html += '</div>';
              });
              news.innerHTML += html;
            }
          });
        }
      }
    }
  }

}(Javascript));
