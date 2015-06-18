'use strict';

import React from 'react';
import ContentService from '../../../../src/content';

class ContentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.contentService = new ContentService(props.umbracoUrl, props.accessToken);
        this.state = {};
    }

    componentDidMount() {
        this.contentService.load()
            .then(content => this.setState({ content }));
    }

    render() {
        if (!this.state.content) {
            return <h1>Loading content...</h1>;
        }
        
        return (
            <div>
                <h2>Link: {this.state.content.url}</h2>
                <button onClick={this.load.bind(this)}>Load data</button>
                <div>
                    {this.state.data}
                </div>
            </div>
        );
    }

    load() {
        this.state.content.load()
            .then(data => {
               this.setState({ data }); 
            });
    }
}

export default ContentComponent;
