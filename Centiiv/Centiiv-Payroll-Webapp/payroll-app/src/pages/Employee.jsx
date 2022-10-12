import React from 'react'
import AunthenticatedLayout from '../components/AuthenticatedLayout'
import {FaRecycle} from "react-icons/fa"
import EmployeeHeader from '../components/employees-components/EmployeeHeader'
import EmployeeTable from '../components/employees-components/EmployeeTable'
const Employee = () => {
  return (
    <AunthenticatedLayout>

    <div className='flex flex-col space-y-6 justify-between px-8 pt-12' >
       <h3 className='flex items-center gap-6 text-2xl font-bold'>

        Employee 
        <FaRecycle />
       </h3>
        <EmployeeHeader />
        <EmployeeTable />
        </div>
    </AunthenticatedLayout>
  )
}

export default Employee