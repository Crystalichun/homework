const SUCCESSCODE = 4;
const METHOD = {
  GET: 'GET',
  POST: 'POST'
}

export class Request {
  
  constructor(method, url) {
    this.method = method;
    this.url = url;
    this.addedHeaders = new Map();
  }
  
  addHeader(name, value) {
    this.addedHeaders.set(name, value);
  }
  
  _createXhr() {
    return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  }
  
  _resolveData(type, text) {
    let result = text;
    if (/application\/json/.test(type)) {
      result = JSON.stringify(result);
    }
    return result;
  }
  
  _setRequestHeaders(xhr) {
    for (let [headerName, headerValue] of this.addedHeaders) {
      xhr.setRequestHeader(headerName, headerValue);
    }
  }
  
  send(data) {
    return new Promise((resolve, reject) => {
      const xhr = this._createXhr();
      
      if (this.method.toUpperCase() === 'GET') {
        xhr.open(METHOD.GET, this.url);
        this._setRequestHeaders(xhr);
        xhr.send();
      } else {
        xhr.open(METHOD.POST, this.url);
        this._setRequestHeaders(xhr);
        xhr.send(JSON.stringify(data));
      }
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== SUCCESSCODE) {
          return;
        }
        
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          const type = xhr.getResponseHeader('content-type') || this.addedHeaders.get('Content-Type') || '';
          const data = this._resolveData(type, xhr.responseText);
          resolve(data);
        } else {
          reject(new Error(xhr.responseText));
        }
      };
    });
  }
}
