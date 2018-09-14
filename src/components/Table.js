import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class _Table extends Component {
    static defaultProps = {
        members: [],
        fields: []
    }

    static propTypes = {
        members: PropTypes.array,
        fields: PropTypes.array
    }
    constructor() {
        super();
        console.log('construct...');
    }

    render() {
        return (
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        {this.props.fields.map((field) => (
                            <Table.HeaderCell key={field.toString()}>{field}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.rows.map((row) => (
                        <Table.Row key={row.toString()}>
                            {Object.keys(row).map((field) => (
                                <Table.Cell key={field.toString()}>{row[field]}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );  
    }
}

export default _Table;