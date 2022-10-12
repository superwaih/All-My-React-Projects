import React from 'react'
import { Link } from 'react-router-dom'

const CreatePayrollCards = ({Icon, onOpen, title, desc, destination}) => {

  return (

   
    <div onClick={onOpen} className='flex cursor-pointer max-w-lg flex-col border space-y-4 border-slate-400 rounded p-6 items-center justify-center'>
        <Icon className="text-6xl text-gray-500" />
        <h4 className='font-bold text-xl'>{title}</h4>
        <p className='leading-18 p-4 w-full text-center'>{desc}</p>
    </div>
  )
}

export default CreatePayrollCards