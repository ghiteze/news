(function (Js) {
  'use strict';

  var $images = Js.findAll('.image');
  if ($images) {
    Js.each($images, function (i, image) {
      var $img = image.find('img');

      $img.on('click', function () {
        var self = this;

        if (! image.classList.contains('zoom')) {
          image.createEl('div').className = 'overlay';
          image.classList.add('zoom');
        }
        
        this.src = this.src.replace('thumb', 'medium');

        var winWidth  = window.innerWidth;
        var winHeight = window.innerHeight;

        var imgWidth  = this.offsetWidth;
        var imgHeight = this.offsetHeight;


        if (imgHeight > winHeight || imgHeight <= winHeight && imgHeight > imgWidth) {
          this.style.height = '90%';
          this.style.width = 'auto';
        }
        else {
          this.style.width = '90%';
          this.style.height = 'auto';
        }

        this.style.top = '50%';
        this.style.marginLeft = - (this.offsetWidth / 2) + 'px';
        this.style.marginTop  = - (this.offsetHeight / 2) + 'px';

        // close
        var $overlay =$img.parentNode.find('.overlay');
        $overlay.on('click', function () {
          image.classList.remove('zoom');
          self.src = self.src.replace('medium', 'thumb');
          self.style = '';
          this.parentNode.removeChild(this);
        });

      });
    });
  }
}(Javascript));