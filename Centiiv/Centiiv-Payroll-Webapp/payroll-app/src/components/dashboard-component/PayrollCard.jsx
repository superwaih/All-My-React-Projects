import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineArrowRight} from "react-icons/ai"
const PayrollCard = () => {
  return (
    <div className='bg-white p-6 gap-4 max-w-md w-[300px] border-slate-500  flex flex-col  border rounded-md shadow-md'>
        <div className='space-y-2'>
        <h3 className='font-semibold font-[13px]'>Total Payroll paid</h3>
        <p className='font-bold leading-12 text-xl'>$100,000,000</p>
        </div>
        <Link to="/history">
       <p className='flex font-semibold gap-2 items-center'> View History 
        <AiOutlineArrowRight /></p>
        </Link>

    </div>
  )
}

export default PayrollCard