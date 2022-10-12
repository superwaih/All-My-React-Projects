import React from 'react'
import {FaEnvelope} from "react-icons/fa"
import UnAunthenticatedLayout from '../UnAunthenticatedLayout'
const SuccessMessage = () => {
  return (
    <UnAunthenticatedLayout >
        <div className='bg-white mt-12 p-4 space-y-8 text-center flex flex-col py-8 justify-center items-center'>
            <h2 className='font-bold'>Check your Email</h2>
            <p>We sent you a mail to confirm to your identity. Thia link will expire within 24 hours. New links will be sent at each login attempt.</p>
            <FaEnvelope className="text-purple-500  text-9xl" />
        </div>
    </UnAunthenticatedLayout>
  )
}

export default SuccessMessage