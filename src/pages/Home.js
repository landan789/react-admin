import React, { Component } from 'react';

import './../styles/Member.css';

class Home extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="page">
                home
            </div>
        );
    }
}

export default Home;
