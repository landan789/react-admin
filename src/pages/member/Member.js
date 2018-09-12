import React, { Component } from 'react';
import logo from './../../images/logo.svg';
import './Member.css';

class Member extends Component {
  render() {
    return (
      <div className="Member">
        <header className="Member-header">
          <img src={logo} className="Member-logo" alt="logo" />
          <h1 className="Member-title">Welcome to React</h1>
        </header>
        <p className="Member-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Member;
