import {Fragment} from "react";
import './Table.scss';

function Table({data, config, keyFn}) {
    const headers = config.map(column => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    });

    const rows = data.map(row => {
        const cells = config.map((column) => {
            return <td className="data" key={column.label}>
                {column.render(row)}
            </td>
        });
        return <tr className="border-b" key={keyFn(row)}>
            {cells}
        </tr>;
    });

    return <table className="table table-auto border-spacing-2">
        <thead>
        <tr className="border-b-2">
            {headers}
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}


export default Table;