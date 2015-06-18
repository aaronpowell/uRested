'use strict';

const restBase = 'umbraco/rest/v1/content';
const urlBaseSymbol = Symbol();
const urlSymbol = Symbol();
const tokenSymbol = Symbol();
const rootSymbol = Symbol();

class Content {
    constructor(url, token) {
        this[urlSymbol] = url;
        this[tokenSymbol] = token;
    }

    load() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this[tokenSymbol]);
        
        return fetch(this[urlSymbol], {
            headers
        })
        .then(res => res.json());
    }

    get url() {
        return this[urlSymbol];
    }
}

class ContentService {
    constructor(umbracoUrl, token) {
        if (!umbracoUrl.endsWith('/')) {
            umbracoUrl += '/';
        }

        this[urlBaseSymbol] = umbracoUrl;
        this[urlSymbol] = umbracoUrl + restBase;
        this[tokenSymbol] = token;
    }

    load() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this[tokenSymbol]);
        
        return fetch(this[urlSymbol], {
            headers
        })
        .then(res => res.json())
        .then(root => new Content(this[urlBaseSymbol] + root._links.content.href, this[tokenSymbol]));
    }
}

export default ContentService;
