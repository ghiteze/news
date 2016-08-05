{
  let page = 1,
      news = Js.find('#news');

  if (news) {
    window.onscroll = function() {
      if ((window.innerHeight + window.scrollY + 0.2) >= document.body.scrollHeight) {
        page++;

        let ajax = new Ajax();

        ajax.request({
          url: `/articles/${page}.json`
        });

        ajax.response((data) => {
          let html = '',
              articles = JSON.parse(data);

          if (articles) {
            Js.objectEach(articles, (key, article) => {
              html += `
              <div class="article grid card">
                <div class="col mobile-4">
                  <a href="/${article.slug}.html">
                    <img src="${article.image_src}"/>
                  </a>
                </div>
                <div class="col mobile-8">
                  <h2><a href="/${article.slug}.html">${article.title}</a></h2>
                  <div class="more">
                    <span class="icon-categories">
                      <a href="/category/${article.cat.slug}">${article.cat.name}</a>
                    </span>
                    <span class="icon-clock">${article.time}</span>
                  </div>
                  <p class="hide-on-tablet-and-down">${article.summary}</p>
                </div>
              </div>`;
            });
            news.innerHTML += html;
          }
        });
      }
    }
  }
}