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
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="member" className="menu-item" href="/member">Member</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default Member;
