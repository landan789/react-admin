import React, { Component } from 'react';

import './../styles/Home.css';

class Home extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="page">
                ---------Home---------
            </div>
        );
    }
}

export default Home;
