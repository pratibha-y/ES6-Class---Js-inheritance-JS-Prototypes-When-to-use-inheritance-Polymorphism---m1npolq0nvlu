module.exports = { API }

class API{
    url;
    constructor(url){
        this.url=url;
        this.method='GET';
    }
    url(){
       return this.url; 
    }
    method(){
        return this.method;
    }

    #secure(){
        if(this.url.indexOf("https://")==0){
            return true;
        }
        else{
            return false;
        }
    }
    isSecure(){
        if(this.#secure()){
            return 'true';
        }
        else{
            return 'false';
        }
    }

    updateUrl(url){
        this.url=url;
    }
}

const s=new API('https://api. com/api/hello');
console.log(s.method);
console.log(s.isSecure());
s.updateUrl('http://api. com/api/hello');
console.log(s.isSecure())
console.log(s.secure);
