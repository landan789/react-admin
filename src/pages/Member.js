import React, { Component } from 'react';

import indexStore from '../stores/index';
import memberAction from '../actions/member';

import Table from './../components/Table';
import Button from './../components/Button';

import './../styles/Member.css';

class Member extends Component {
    constructor(props) {
        super(props);
        this.onInsert = this.onInsert.bind(this);

        let fields = [
            'ID',
            '电邮',
            '姓名',
            '备注'
        ];

        // assign state directly insted of setState method
        this.state = {
            fields: fields
        };

        indexStore.subscribe(() => {
            this.setState({
                members: indexStore.getState().members
            });
        });
    }

    componentDidMount() {
        indexStore.dispatch(memberAction.find());
    }

    componentWillUnmount() {
    }

    onInsert(event) {
        let member = {
            email: 'seven@gmail.com',
            name: 'Seven'
        };
        let members = [member];
        indexStore.dispatch(memberAction.insert(members));
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