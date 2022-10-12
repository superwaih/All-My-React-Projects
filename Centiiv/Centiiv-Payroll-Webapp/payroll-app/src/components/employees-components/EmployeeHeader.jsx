import React from 'react'
import { FaSearch } from 'react-icons/fa'

const EmployeeHeader = () => {
  return (
    <div className='p-4 mt-8 justify-evenly flex border gap-2 border-slate-500'>
        <div className="p-4 gap-8 border-r border-dashed border-slate-800 flex ">
            <div className='h-6 w-6 rounded-full bg-green-600'>
            </div>
            <p>Active Employees</p>
        </div>
        <div className="p-4 gap-8 border-r border-dashed border-slate-800 flex ">
            <div className='h-6 w-6 rounded-full bg-purple-600'>
            </div>
            <p>inactive Employees</p>
        </div>
       
        <div className="p-4 gap-8 border-r border-dashed border-slate-800 flex ">
            <div className='h-6 w-6 rounded-full bg-red-300'>
            </div>
            <p>Pending Employees</p>
        </div>

        <div className='flex border gap-3 border-slate-500  p-4 items-center'>
            <FaSearch />
            <input className='outline-none bg-transparent border-none' type="text" placeholder='search employee' />
        </div>
    </div>
  )
}

export default EmployeeHeader