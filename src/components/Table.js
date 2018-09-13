import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class _Table extends Component {
    static defaultProps = {
        members: []
    }
    constructor(){
        super();
    }

    render() {
        return (
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.rows.map((row) => (
                        <Table.Row key={row.toString()}>
                            <Table.Cell>{row.id}</Table.Cell>
                            <Table.Cell>{row.email}</Table.Cell>
                            <Table.Cell>{row.name}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );  
    }
}

export default _Table;