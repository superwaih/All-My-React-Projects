import React from 'react'
import AunthenticatedLayout from '../components/AuthenticatedLayout'
import PayrollCard from '../components/dashboard-component/PayrollCard'

const Dashboard = () => {
  return (
    <AunthenticatedLayout>
    <div className='p-8'>
    <div className='space-y-4'>
      <h2 className='font-bold'>Payroll Overview</h2>

      <div className="payroll cards flex justify-between">
      <PayrollCard />
    <PayrollCard />

    <PayrollCard />
    
      </div>

          <div className='flex justify-between w-full py-8 gap-4' >
            <div className='w-full'>
              <div className='space-y-5'>
                <h3 className='font-bold'>Create Payroll</h3>
                <div className='h-24 text-center border-slate-500 rounded-md w-full bg-white border'>
                  Banner
                </div>
              </div>


              <div className="analytics space-y-4 w-full flex-end mt-12">
                <h3 className='font-bold'>Analytics Overview</h3>
                <div className="chart h-64 border-slate-500 border text-center bg-white w-full ">
                  Chart
                </div>
              </div>
            </div>

            <div className="payroll w-full space-y-5">
              <h3 className='font-bold'>Payroll History</h3>
              <div className="h-12 border-slate-500 rounded-md w-full bg-white border"></div>
             
              <div className="h-12 w-full border-slate-500 rounded-md bg-white border"></div>
              <div className="h-12 w-full border-slate-500 rounded-md bg-white border"></div>
              <div className="h-12 w-full border-slate-500 rounded-md bg-white border"></div>
              <div className="h-12 w-full border-slate-500 rounded-md bg-white border"></div>
              <div className="h-12 w-full border-slate-500 rounded-md bg-white border"></div>
              <div className="h-12 w-full border-slate-500 rounded-md bg-white border"></div>

            </div>
          </div>

      
    </div>

    </div>

    </AunthenticatedLayout>
  )
}

export default Dashboard