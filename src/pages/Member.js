import React, { Component } from 'react';
import { connect } from 'react-redux';

import indexStore from '../stores/index';
import memberAction from '../actions/member';

import Table from './../components/Table';
import Button from './../components/Button';

import './../styles/Member.css';

class _Member extends Component {
    constructor(props) {
        super(props);

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
                <Table rows={this.props.members} fields={this.state.fields}/>
            </div>
        );
    }
}

const Member = connect(
    (state) => {
        return {
            members: state.members
        };
    },
    (dispatch, ownProps) => {
        return {
            onFind: (...args) => dispatch(memberAction.find(...args)),
            onInsert: (...args) => dispatch(memberAction.insert(...args))
        };
    }

)(_Member);

export default Member;