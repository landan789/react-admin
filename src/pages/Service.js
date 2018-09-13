import React, {Component} from 'react';

import './../styles/Service.css';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    render() {
        return (
            <div className="page">
                ---------Service---------
            </div>
        );
    }
}

export default Service;