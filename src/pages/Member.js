import React, { Component } from 'react';
import MemberStore from '../stores/Member';
import MemberAction from '../actions/Member';

import './../styles/Member.css';

import Table from './../components/Table';

class Member extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
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