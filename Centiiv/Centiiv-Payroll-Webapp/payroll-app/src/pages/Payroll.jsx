import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { FcSettings } from "react-icons/fc"
import AunthenticatedLayout from '../components/AuthenticatedLayout'

const Payroll = () => {
  return (
    <AunthenticatedLayout >
      <>
        <div className='flex justify-between px-8 pt-12  '>
          <h3 className='text-2xl font-semibold'>Payroll Schedule</h3>
          <div className="btns flex gap-3">
            <button
              className='bg-purple-600 font-bold text-white py-3 px-6 rounded-md'
            >Choose Wallet</button>
            <Link to="/payroll/create-payroll">
              <button
                className='bg-purple-600 font-bold text-white py-3 px-6 rounded-md'
              >Create payroll</button>

            </Link>

            <Link to="/payroll/settings">
            <button className='text-purple-600 items-center flex gap-4  font-bold bg-white py-3 px-6 rounded-md'>Setting
              <FcSettings />
            </button>
            </Link>
           

          </div>



        </div>

        <div className='flex justify-between flex-col px-8 pt-12  '>
          <div className='border-slate-500 border p-8 w-full'>

          </div>
          <div className='border-slate-500 border p-8 w-full'>

          </div>
        </div>
        
      </>

    </AunthenticatedLayout>

  )
}

export default Payroll