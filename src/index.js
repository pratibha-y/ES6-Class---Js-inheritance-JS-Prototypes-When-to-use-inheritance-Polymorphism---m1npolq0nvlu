*class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    #secure = url.startsWith("https") ? true : false;
  }
  isSecure() {
    return this.#secure;
  }
  updateURL(newUrl) {
    this.url = newUrl;
    this.#secure = newUrl.startsWith("https") ? true : false;
  }
}
module.exports = { API };*/

class API{
    #secure;
    url;
    method;
    constructor(url){
        this.url=url;
        if(url.includes("https"))
        this.#secure=true;
        else
        this.#secure=false;
        this.method="GET"
    }
    isSecure(){
        return this.#secure;
    }
    updateUrl(url){
        this.url=url
        if(url.includes("https"))
        this.#secure=true;
        else
        this.#secure=false;
    }
}
module.exports = { API }
