(function (Js) {
  'use strict';

  var Modal = {
    init: function () {
      return Js.each(this, function (index, trigger) {
        trigger.on('click', function (event) {
          event.preventDefault();

          var target = this.getAttribute('data-target');
          var modal  = Js.find('#' + target);

          Modal.open.call(modal);

          Modal.close.call(modal);
        });
      });
    },

    open: function () {
      this.style.display = 'block';
    },

    close: function () {
      var
        close = this.find('.modal--close'),
        overlay = this.find('.modal--overlay');

      close.on('click', function (event) {
        event.preventDefault();
        this.style.display = 'none';
      }.bind(this));

      overlay.on('click', function () {
        event.preventDefault();
        this.style.display = 'none';
      }.bind(this));
    }
  };

  Modal.init.apply(Js.findAll('.modal--trigger'));

}(Javascript));
