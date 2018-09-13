import React, { Component } from 'react';

import './../styles/Calendar.css';

class Calendar extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="page">
                ---------Calendar---------
            </div>
        );
    }
}

export default Calendar;
