import React, { Component } from 'react';

import './../styles/Member.css';

import Table from './../components/Table';

class Member extends Component {
    constructor(props) {
        super(props);
        let members = [{
            id: '001',
            email: 'tom@gmail.com',
            name: 'Tom'
        }, {
            id: '002',
            email: 'mary@gmail.com',
            name: 'Mary'
        }, {
            id: '003',
            email: 'jim@gmail.com',
            name: 'Jim'
        }, {
            id: '004',
            email: 'jone@gmail.com',
            name: 'Jone'
        }];

        let fields = [
            'ID',
            '电邮',
            '姓名'
        ];

        this.state = {
            members: members,
            fields: fields
        };
    }

    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="page">
                <Table rows={this.state.members} fields={this.state.fields}/>
            </div>
        );
    }
}

export default Member;
