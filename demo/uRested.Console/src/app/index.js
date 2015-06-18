import React from 'react';
import LoginComponent from './LoginComponent';
import ContentComponent from './ContentComponent';
import login from '../lib/login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (!this.state.accessToken) {
            return <LoginComponent login={this.login.bind(this)} />
        } else {
            return <ContentComponent accessToken={this.state.accessToken} umbracoUrl={this.props.url} />
        }
    }

    login(username, password) {
        login(this.props.url, username, password)
            .then(({ access_token }) => this.setState({ accessToken: access_token }));
    }
}

export default App;