class Js {
  constructor() {  }

  static find(selector) {
    return this.getElement.call(document, selector)[0];
  }

  static findAll(selector) {
    return this.getElement.call(document, selector);
  }

  static getElement(selector) {
    let firstChar = selector.charAt(0);
    if (firstChar == '#') {
      return [this.getElementById(selector.substr(1)), undefined];
    }
    else if (firstChar == '.') {
      return this.getElementsByClassName(selector.substr(1))
    }
    else {
      return this.getElementsByTagName(selector);
    }
  }

  static arrayEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(i, arr[i]);
    }
  }

  static objectEach(obj, callback) {
    for (let i in obj) {
      callback(i, obj[i]);
    }
  }

  static removeDiacritics(str) {
    str = str.toLowerCase().trim();
    str = str.replace(/[àáảãạăằắẳẵặâầấẩẫậ]/g,"a");
    str = str.replace(/[èéẻẽẹêềếểễệ]/g,"e");
    str = str.replace(/[òóỏõọơờớởỡợôồốổỗộ]/g,"o");
    str = str.replace(/[ùúủũụưừứửữự]/g,"u");
    str = str.replace(/[đ]/g,"d");
    str = str.replace(/[ìíỉĩị]/g,"i");
    str = str.replace(/[ỳýỷỹỵ]/g,"y");
    str = str.replace(/[\~\!\@\#\$\%\^\&\*\(\)\?]/g,"");
    return str.replace(/\s+/g, "-");
  }
}


{
  Element.prototype.on = function (event, callback) {
    this.addEventListener(event, callback);
  };

  Element.prototype.find = function (selector) {
    return Js.getElement.call(this, selector)[0];
  };

  Element.prototype.findAll = function (selector) {
    return Js.getElement.call(this, selector);
  };

  Element.prototype.createEl = function (name) {
    let elem = document.createElement(name);
    this.appendChild(elem);
    return elem;
  };

  Element.prototype.createElBefore = function (name, node) {
    let elem = document.createElement(name);
    this.insertBefore(elem, node);
    return elem;
  };

  Element.prototype.attr = function (attrs) {
    if (typeof attrs === "string") {
      return this.getAttribute(attrs);
    }
    else {
      for (let i in attrs) {
        this.setAttribute(i, attrs[i]);
      }
      return this;
    }
  };

  Element.prototype.text = function (content) {
    this.innerHTML = content;
    return this;
  };

  Element.prototype.addClass = function (className) {
    this.classList.add(className);
    return this;
  };

  Element.prototype.removeClass = function (className) {
    this.classList.removeClass(className);
    return this;
  }

  Element.prototype.has = function (className) {
    return this.classList.contains(className);
  }
}