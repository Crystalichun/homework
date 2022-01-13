enum MyRequestMethod {
  Get = 'GET',
  Post = 'POST'
}

interface ExtraHeader {
  [key: string]: string
}

export class MyRequest {
  private static SUCCESS_CODE = 4;

  private readonly requestMethod: string;

  private readonly url: string;

  private addedHeaders: Map<string, string>;

  constructor(requestMethod: string, url: string) {
    this.requestMethod = requestMethod;
    this.url = url;
    this.addedHeaders = new Map();
  }

  private static _createXhr() {
    return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  }

  private static _resolveData(type: string, text: string) {
    let result = text;
    if (/application\/json/.test(type)) {
      result = JSON.stringify(result);
    }
    return result;
  }

  private _setRequestHeaders(xhr: XMLHttpRequest): void {
    for (const [headerName, headerValue] of this.addedHeaders) {
      xhr.setRequestHeader(headerName, headerValue);
    }
  }

  public addHeaders(headers: ExtraHeader): void {
    this.addedHeaders = new Map(Object.entries(headers));
  }

  public fetchData(data?: Object) {
    return new Promise((resolve, reject) => {
      const xhr = MyRequest._createXhr();

      if (this.requestMethod.toUpperCase() === 'GET') {
        xhr.open(MyRequestMethod.Get, this.url);
        this._setRequestHeaders(xhr);
        xhr.send();
      } else {
        xhr.open(MyRequestMethod.Post, this.url);
        this._setRequestHeaders(xhr);
        xhr.send(JSON.stringify(data));
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== MyRequest.SUCCESS_CODE) {
          return;
        }

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          const type = xhr.getResponseHeader('content-type') || this.addedHeaders.get('Content-Type') || '';
          const resolvedData = MyRequest._resolveData(type, xhr.responseText);
          resolve(resolvedData);
        } else {
          reject(new Error(xhr.responseText));
        }
      };
    });
  }
}
