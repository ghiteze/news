(function (Js) {
  'use strict';

  var $chips = Js.find('#chips');

  if ($chips) {
    var
    $chipsInput = $chips.find('.chips-input'),
    $chipsValue = $chips.find('.chips-value'),
    $chipsShow  = $chips.find('.chips-show'),

    chips = ($chipsValue.value.length != 0) ? $chipsValue.value.split(",") : [];

    $chipsInput.on('focusin', function () {
      $chips.style.borderColor = '#5c6bc0';
    });

    $chipsInput.on('focusout', function () {
      $chips.style.borderColor = '#ccc';
    });

    // add chip
    $chipsInput.on('keypress', function (event) {
      if (event.keyCode == 13) {
        event.preventDefault();

        if (chips.length == 0 || chips.indexOf(this.value) == -1 && this.value.length > 0) {
          chips.push(this.value);
          $chipsShow.createElBefore('span', $chipsInput)
                    .text(this.value)
                    .classList.add('chip');
        }

        this.value = '';
        $chipsValue.value = chips;
      }
    });

    // remove chip
    document.addEventListener('click', function (e) {
      var elem = e.target;
      if (elem.className == 'chip') {
        var index = chips.indexOf(elem.innerHTML);
        if (index > -1) {
          elem.parentNode.removeChild(elem);
          chips.splice(index, 1);
          $chipsValue.value = chips;
        }
      }
    });

  }
}(Javascript));
