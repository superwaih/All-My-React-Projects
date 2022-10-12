import React from 'react'

const SettingsCard = ({title, desc}) => {
  return (
    <div className='flex flex-col shadow-md bg-white border border-slate-500 space-y-5 p-6'>
        <div className='flex justify-between'>
            <h3>Disabled</h3>
            <input type="radio" name="" id="" />
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='w-4/5'>{desc}</p>
    </div>
  )
}

export default SettingsCard