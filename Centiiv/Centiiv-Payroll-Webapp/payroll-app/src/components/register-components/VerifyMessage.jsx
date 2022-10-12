import React from 'react'
import UnAunthenticatedLayout from '../UnAunthenticatedLayout'
import {Link} from "react-router-dom"
const VerifyMessage = ({setSuccessful}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSuccessful(true)
  }
  return (
    <UnAunthenticatedLayout >
    <div className=' py-8 w-full  md:w-3/5 flex flex-col items-center justify-center'>
           <h1 className='text-center  text-xl font-bold py-8'>Verification</h1>
          <form onSubmit={handleSubmit} className='bg-white space-y-8 rounded-lg p-4 w-full'>
           <p className='text-2xl font-bold mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         

         <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="email"> Verification Code</label>
           <input className='input-brand text-center ' type="password" placeholder='enter verification code' />
          </div>

          <div className="flex items-center flex-col sm:flex-row w-full mb-8 gap-4 justify-center ">
          <div>
           <button className=' text-purple-600 font-bold border py-3 px-8 rounded-md'>Resend</button>
          </div>

          <div>
           <button type='submit' className='bg-purple-600 font-bold text-white py-3 px-8 rounded-md'>Submit</button>
          </div>
          </div>

         <p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>



         

          </form>

        </div>
  </UnAunthenticatedLayout>
  )
}

export default VerifyMessage