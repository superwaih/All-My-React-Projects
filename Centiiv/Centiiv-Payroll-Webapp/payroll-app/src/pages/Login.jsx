import React from 'react'
import UnAunthenticatedLayout from '../components/UnAunthenticatedLayout'
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <UnAunthenticatedLayout>

         <div className=' py-8 w-full md:w-2/5 flex flex-col items-center justify-center'>
           <form className='bg-white space-y-8 rounded-lg p-4 w-full'>
            <h3 className='text-2xl font-bold mb-4 text-center'>Login</h3>
          

          <div className='mb-5 w-full flex flex-col gap-2'>
           <label className='font-bold' htmlFor="email"> Email</label>
            <input className='input-brand ' type="text" placeholder='enter email' />
           </div>

           <div className='mb-5 w-full flex flex-col gap-2'>
           <label className='font-bold' htmlFor="password"> Password</label>
            <input className='input-brand ' type="passowrd" placeholder='enter password' />
           </div>

         

        

          <div className='flex-wrapper'>
          <div className='mb-5 flex gap-2 items-center'>
           <input type="checkbox" />
           <label className='font-bold' htmlFor="email"> Remember me </label>
           </div>

           <div>
            <Link to="/dashboard">
            <button className='bg-blue-600 text-white py-3 px-8 font-semibold  rounded-md'>Log in</button>
            </Link>
           </div>
          </div>
          <div className='flex items-center gap-4 justify-center'>
            <p>Dont have an account? </p>
            <Link to="/register">
            <button className='text-blue-600 bg-white border p-2'>Create an account</button>

            </Link>
          </div>



          

           </form>

         </div>
    </UnAunthenticatedLayout>
   
  )
}

export default Login