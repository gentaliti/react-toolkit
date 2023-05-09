import Table from "./Table";
import {useState} from "react";
import './Table.scss';

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const {config, data} = props;

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder == null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const iconUp = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
    </svg>;

    const iconDown = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                          stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
    </svg>;

    function getIcons(label, sortBy, sortOrder) {
        if (label !== sortBy) {
            return <div className="flex-v">
                {iconUp}
                {iconDown}
            </div>
        }
        if (sortOrder === null) {
            return <div className="flex-v">
                {iconUp}
                {iconDown}
            </div>
        }
        if (sortOrder !== 'asc') {
            return <div>
                {iconDown}
            </div>
        }
        if (sortOrder !== 'desc') {
            return <div>
                {iconUp}
            </div>
        }
    }

    const updatedConfig = config.map(column => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                <div className="header-cell">
                    {getIcons(column.label, sortBy, sortOrder)}
                    <h4> {column.label}</h4>
                </div>
            </th>
        }
    })


    let sortedData = data;
    if (sortOrder && sortBy) {
        const {sortValue} = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * reverseOrder;
            } else {
                return (valA - valB) * reverseOrder;
            }
        });
    }


    return <div className="sortable-table">
        <Table {...props} config={updatedConfig} data={sortedData}/>
    </div>
}

export default SortableTable;