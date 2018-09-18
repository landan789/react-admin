import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class _Table extends Component {
    static defaultProps = {
        rows: [],
        fields: []
    }

    static propTypes = {
        rows: PropTypes.array,
        fields: PropTypes.array
    }
    constructor() {
        super();
        console.log('construct...');
    }

    render() {
        console.log(this.props.rows);

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
                        <Table.Row key={row.id.toString()}>
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