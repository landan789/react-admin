import React, { Component } from 'react';

class About extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="page">
                about
            </div>
        );
    }
}

export default About;
