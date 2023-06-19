class API {
	#secure;
	url;
	method;

	constructor(url) {
		this.url = url;
		this.method = 'GET';
		this.#secure = url.includes('https');
	}
	isSecure() {
		return this.#secure;
	}
	updateUrl(url) {
		this.url = url;
		this.#secure = url.includes('https');
	}
}

// const s = new API('http://api.com/api/hello');

module.exports = { API };
