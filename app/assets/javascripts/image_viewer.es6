{
  let images = Js.findAll('.image');

  if (images) {
    Js.arrayEach(images, function (i, image) {
      let img = image.find('img');

      img.on('click', function () {

        if (! image.has('zoom')) {
          image.createEl('div').className = 'overlay';
          image.className('zoom');
        }

        this.src = this.src.replace('thumb', 'medium');

        let winWidth  = window.innerWidth;
        let winHeight = window.innerHeight;

        let imgWidth  = this.offsetWidth;
        let imgHeight = this.offsetHeight;

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
        let overlay = img.parentNode.find('.overlay');
        overlay.on('click', function () {
          image.removeClass('zoom');
          self.src = self.src.replace('medium', 'thumb');
          self.style = '';
          this.parentNode.removeChild(this);
        });

      });
    });
  }
}