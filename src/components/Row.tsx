import {FC} from 'react';

type RowProps = {
    data: number[]
    rowIndex: number
}

const sumRow = (row: number[]) => row.reduce((sum, item) => sum + item, 0)
const Row: FC<RowProps> = ({data, rowIndex}) => (<tr>
        {data.map((value, index) => <td key={index}><input type="number" data-x={index} data-y={rowIndex}
                                                           value={value}
                                                           min={1} max={999}/></td>)}
        <th>{sumRow(data)}</th>
    </tr>
)
export default Row;
