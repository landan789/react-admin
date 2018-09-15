import React, { Component } from 'react';
import MemberStore from '../stores/Member';
import MemberAction from '../actions/Member';

import './../styles/Member.css';

import Table from './../components/Table';
import Button from './../components/Button';

class Member extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.onInsert = this.onInsert.bind(this);
        let fields = [
            'ID',
            '电邮',
            '姓名',
            '备注'
        ];

        // assign state directly insted of setState method
        this.state = {
            members: MemberStore.find(),
            fields: fields
        };
    }

    componentDidMount() {
        MemberStore.addChangeListener(this._onChange);
        MemberAction.find();
    }

    componentWillUnmount() {
        MemberStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            members: MemberStore.find()
        });
    }

    onInsert(event) {
        let member = {
            id: '777',
            email: 'seven@gmail.com',
            name: 'Seven'
        };
        MemberAction.insert(member);
    }

    render() {
        return (
            <div className="page">
                <Button icon="plus" onClick={this.onInsert}></Button>
                <Table rows={this.state.members} fields={this.state.fields}/>
            </div>
        );
    }
}

export default Member;