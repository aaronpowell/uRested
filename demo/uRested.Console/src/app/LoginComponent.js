'use strict';

import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: undefined,
            password: undefined
        };
    }

    render() {
        return (
            <div className="login">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.onChange.bind(this)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.state.password} onChange={this.onChange.bind(this)} />
                </div>

                <div>
                    <button onClick={this.login.bind(this)}>Login</button>
                </div>
            </div>
        )
    }

    onChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value
        });
    }

    login() {
        this.props.login(this.state.username, this.state.password);
    }
}

export default LoginComponent;
