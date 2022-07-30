import React from 'react'
import Select from 'react-select'

const TableRow = ({dataName, data, newRow, setnewRow, independent, dependent, freq}) => {
    const independent_options = [
        { value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },
        { value: 'Rate of Return (Avg.)', label: 'Rate of Return (Avg.)' }
    ]

    const dependent_options = [
        { value: 'ME Shaft Power (Avg.)', label: 'ME Shaft Power (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },

    ]
    const handleDelete = ({id}) =>{
        setnewRow(newRow.filter((row) => row.id !== id))
    }

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(data)} className='btn-del' >x</button>
            </td>
            <td className='td-name'>
                <input type="text" defaultValue={dataName} />
            </td>
            <td>
                <Select defaultValue={[independent[0], independent[1]]}  
                isMulti options={independent_options} />
            </td>
            <td>
                <Select 
                defaultValue={dependent}
                options={dependent_options} />
            </td>

            <td>
                <input className='freq' placeholder='min' type="number" defaultValue={freq} />
            </td>
            <td>
                <button className='save-btn' >
                    save
                </button>
            </td>
        </tr>
    
    )
}

export default TableRow