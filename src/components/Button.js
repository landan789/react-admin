import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class _Button extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Button icon={this.props.icon} onClick={this.props.onClick}/>
        );
    }
}

export default _Button;