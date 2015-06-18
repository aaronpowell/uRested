const clientId = 'umbraco';
const clientSecret = null;
const grantPath = '/umbraco/oauth/token';
const revokePath = '/umbraco/oauth/revoke';

let login = function (url, username, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return fetch(url + grantPath, {
            method: 'POST',
            body: `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&client_id=umbraco&client_secret=`,
            headers
        })
        .then(res => res.json());
};

export default login;
