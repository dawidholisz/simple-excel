import React, {useState} from 'react';
import Row from "./Row.tsx";
import {expandTable, generateTable, shrinkTable, sumTwoDimensionalArray} from "../utils";

const DEFAULT_TABLE_SIZE = 7

const Table = () => {
    const [data, setData] = useState(generateTable(DEFAULT_TABLE_SIZE));
    const handleValueChange = ({target}: React.FormEvent<HTMLTableElement>) => {
        if (!(target instanceof HTMLInputElement))
            return

        const {x: columnIndex, y: rowIndex} = target.dataset

        if (columnIndex === undefined || rowIndex === undefined)
            return;

        const newValue = Number(target.value)

        setData(currentData => {
            const newData = [...currentData];
            newData[+rowIndex] = [...currentData[+rowIndex]];
            newData[+rowIndex][+columnIndex] = newValue;
            return newData;
        })
    }

    const handleTableExpand = () => {
        setData(currentData => expandTable(currentData))
    }
    const handleTableShrink = () => {
        setData(currentData => shrinkTable(currentData))
    }

    return (
        <>
            <button type="button" onClick={handleTableExpand}>[+]</button>
            <button type="button" onClick={handleTableShrink}>[-]</button>
            <table className="table" onChange={handleValueChange}>
                <tbody>
                {data.map(((row, index) => <Row rowIndex={index} key={index} data={row}/>))}
                </tbody>
                <tfoot>
                <tr>
                    <th>SUM:</th>
                    <th>{sumTwoDimensionalArray(data)}</th>
                </tr>
                </tfoot>
            </table>
        </>
    );
};

export default Table;
