{
  let slide, slides, counter,speed;

  slide = Js.find('#slide');
  if (slide) {
    slides  = slide.findAll('.slide');
    speed   = 5000;
    counter = 0;

    slides[counter].addClass('active');

    setInterval( () => {
      slides[counter].removeClass('active');
      counter++;

      if (counter => slides.length) {
        counter = 0;
      }

      slides[counter].addClass('active');
    }, speed);
  }
}
