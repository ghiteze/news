{
  let sideNavBtns = Js.findAll('.side-nav-btn');

  Js.arrayEach(sideNavBtns, function (index, btn) {

    btn.on('click', function () {
      let target  = this.attr('data-target');
      let sideNav = Js.find('#' + target);

      sideNav.style.display = 'block';
      this.parentNode.createEl('div').className = 'overlay';

      Js.find('.overlay').on('click', function () {
        sideNav.style = '';
        this.parentNode.removeChild(this);
      });
    });

  });
}
