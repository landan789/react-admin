import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';

import logo from './../images/logo.svg';
import './../styles/Member.css';

class Member extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="page">
                member
            </div>
        );
    }
}

export default Member;
