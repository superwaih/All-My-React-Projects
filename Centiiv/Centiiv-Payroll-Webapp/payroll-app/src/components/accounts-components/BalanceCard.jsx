import React from 'react'
import {FaBitcoin} from "react-icons/fa"

const BalanceCard = () => {
  return (
    <div className='border border-slate-400 w-[300px] space-y-6 p-3 bg-slate-300'>
        <FaBitcoin className='text-3xl' />

        <div className='flex justify-between'>
            <p className='font-bold'>5000ETH</p>
            <span>Bal.</span>
        </div>
    </div>
  )
}

export default BalanceCard