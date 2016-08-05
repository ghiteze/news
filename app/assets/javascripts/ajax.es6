class Ajax {
  constructor(attrs) {
    super();
  }
  
  request(attrs) {
    let { type = 'GET', url, data, async = true, csrf } = attrs;
    
    this.type  = type;
    this.url   = url;
    this.data  = data;
    this.async = async;
    this.csrf  = csrf;
    
    this.xhttp = new XMLHttpRequest();
  }
  
  
  response(callback) {
    this.xhttp.onreadystatechange = () => {
      if (this.xhttp.readyState == 4 && this.xhttp.status == 200) {
        callback(this.xhttp.responseText);
      }
    }
    this.xhttp.open(this.type, this.url, this.async);
    if (this.type != 'GET') {
      this.xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      this.xhttp.setRequestHeader('X-CSRFToken', this.csrf);
    }
    this.xhttp.send(this.data);
  }
}