(function (Js) {
  'use strict';

  var $trigger = Js.findAll('.side-nav-btn');
  Js.each($trigger, function (i, trigger) {
    trigger.on('click', function () {
      var target = this.getAttribute('data-target');
      var $sidenav = Js.find('#' + target);

      $sidenav.style.display = 'block';
      this.parentNode.createEl('div').className = 'overlay';

      Js.find('.overlay').on('click', function () {
        $sidenav.style.display = 'none';
        this.parentNode.removeChild(this);
      });
    });
  });
}(Javascript));
