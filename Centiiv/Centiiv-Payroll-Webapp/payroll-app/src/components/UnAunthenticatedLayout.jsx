import React from 'react'

const UnAunthenticatedLayout = ({children}) => {
  return (
    <div className='h-screen relative  py-6 px-8 bg-gray-400 w-full'>
        <div className='font-bold text-2xl'>
        payroller
        </div>
       <div className='items-center justify-center flex'>
       {children}
       </div>
        <div className="footer absolute bottom-12 text-3xl text-center text-gray-700">
        Payroller (2022), is a registered trademark and or copyright of centiiv and all rights have been reserved.
        </div>
    </div>
  )
}

export default UnAunthenticatedLayout