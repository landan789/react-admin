import React, {Component} from 'react';

import './../styles/Message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    render() {
        return (
            <div className="page">
                ---------Message---------
            </div>
        );
    }
}

export default Message;