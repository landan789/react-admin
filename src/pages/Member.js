import React, { Component } from 'react';
import MemberStore from '../stores/Member';
import MemberAction from '../actions/Member';

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

        // assign state directly insted of setState method
        this.state = {
            members: members,
            fields: fields
        };
    }

    getInitialState() {
        return {
            mambers: MemberStore.getAll()
        };
    }

    componentDidMount() {
        MemberStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        MemberStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            members: MemberStore.findAll()
        });
    }

    insert(event) {
        MemberAction.insert('new item');
    }

    render() {
        return (
            <div className="page">
                <Table rows={this.state.members} fields={this.state.fields}/>
            </div>
        );
    }
}

export default Member;
