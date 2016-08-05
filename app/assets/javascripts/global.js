

(function (win) {
  'use strict';

  var Javascript = {
    find: function (selector) {
      return this.getElement.call(document, selector)[0];
    },

    findAll: function (selector) {
      return this.getElement.call(document, selector);
    },

    getElement: function (selector) {
      var firstChar = selector.charAt(0);
      if (firstChar == '#') {
        return [this.getElementById(selector.substr(1)), undefined];
      }
      else if (firstChar == '.') {
        return this.getElementsByClassName(selector.substr(1))
      }
      else {
        return this.getElementsByTagName(selector);
      }
    },

    removeDiacritics: function (str) {
      str = str.toLowerCase().trim();
      str = str.replace(/[àáảãạăằắẳẵặâầấẩẫậ]/g,"a");
      str = str.replace(/[èéẻẽẹêềếểễệ]/g,"e");
      str = str.replace(/[òóỏõọơờớởỡợôồốổỗộ]/g,"o");
      str = str.replace(/[ùúủũụưừứửữự]/g,"u");
      str = str.replace(/[đ]/g,"d");
      str = str.replace(/[ìíỉĩị]/g,"i");
      str = str.replace(/[ỳýỷỹỵ]/g,"y");
      str = str.replace(/[\~\!\@\#\$\%\^\&\*\(\)\?]/g,"");
      str = str.replace(/\,+/g, "");
      str = str.replace(/\.+/g, "");
      str = str.replace(/\:+/g, "");
      return str.replace(/\s+/g, "-");
    },

    each: function (arr, callback) {
      for (var i = 0; i < arr.length; i++) {
        callback(i, arr[i]);
      }
    },

    ajax: {
      get: function (url, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(xhttp.responseText);
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      },

      post: function (url, method, data, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(xhttp.responseText);
          }
        };
        xhttp.open(method, url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
      }
    }
  };

  win.Javascript = Javascript;
}(window));


(function (Elem, Js) {
  'use strict';

  Elem.prototype.on = function (event, callback) {
    this.addEventListener(event, callback);
  };

  Elem.prototype.find = function (selector) {
    return Js.getElement.call(this, selector)[0];
  };

  Elem.prototype.findAll = function (selector) {
    return Js.getElement.call(this, selector);
  };

  Elem.prototype.createEl = function (name) {
    var elem = document.createElement(name);
    this.appendChild(elem);
    return elem;
  };

  Elem.prototype.createElBefore = function (name, node) {
    var elem = document.createElement(name);
    this.insertBefore(elem, node);
    return elem;
  };

  Elem.prototype.attr = function (attrs) {
    for (var i in attrs) {
      this.setAttribute(i, attrs[i]);
    }
    return this;
  };

  Elem.prototype.text = function (content) {
    this.innerHTML = content;
    return this;
  }
}(Element, Javascript));
