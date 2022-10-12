import React from 'react'
import UnAunthenticatedLayout from '../UnAunthenticatedLayout'
import { Link } from "react-router-dom"

const SignUpForm = ({setVerify}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    setVerify(true)
  }

  return (
    <UnAunthenticatedLayout >
    <div className=' py-8 w-full md:w-3/5 flex flex-col items-center justify-center'>
           <h1 className='text-center text-2xl font-bold py-8'>Create a new account</h1>
          <form onSubmit={handleSubmit} className='bg-white rounded-lg p-4 w-full'>
           <h3 className='text-2xl font-bold mb-4 text-center'>Sign Up</h3>
         <div className="flex flex-col md:flex-row justify-between gap-4 w-full ">
         <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="firstname"> First name</label>
           <input className='input-brand ' type="text" placeholder='enter first name' />
          </div>

          <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="lastname">Last name</label>
           <input className='input-brand ' type="text" placeholder='enter first name' />
          </div>
         </div>

         <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="email"> Email</label>
           <input className='input-brand ' type="text" placeholder='enter email' />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 w-full ">
         <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="firstname"> Password</label>
           <input className='input-brand ' type="text" placeholder='enter first name' />
          </div>

          <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="lastname">Enter Password again</label>
           <input className='input-brand ' type="text" placeholder='enter first name' />
          </div>
         </div>

         <div className='mb-5 w-full flex flex-col gap-2'>
          <label className='font-bold' htmlFor="email"> Country</label>
           <select className='input-brand ' type="text" placeholder='e'>
               <option value="">Select Country</option>
           </select>
          </div>

         <div className='flex-wrapper'>
         <div className='mb-5 flex gap-2 items-center'>
          <input type="checkbox" />
          <label className='font-bold' htmlFor="email"> Agree to terms and condition</label>
          </div>

          <div>
           <button type='submit' className='bg-blue-600 text-white py-3 px-2 rounded-md'>Sign up</button>
          </div>
         </div>
         <div className='flex items-center gap-4 justify-center'>
           <p>Already have an account? </p>
           <Link to="/login">
           <button className='text-blue-600 bg-white border p-2'>Login</button>

           </Link>
         </div>



         

          </form>

        </div>
  </UnAunthenticatedLayout>
  )
}

export default SignUpForm