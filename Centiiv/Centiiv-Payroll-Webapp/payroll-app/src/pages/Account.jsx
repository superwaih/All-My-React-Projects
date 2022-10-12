import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import BalanceCard from '../components/accounts-components/BalanceCard'
import AunthenticatedLayout from '../components/AuthenticatedLayout'
import { AccountCreationModal } from '../components/modals/AccountCreationModal'
const Account = () => {

  const{isOpen, onOpen, onClose} = useDisclosure()

  
  return (
    <AunthenticatedLayout >
      <div className='p-8 space-y-5'>
        <h3 className='text-3xl font-bold'>Account Allocation</h3>
        <div className='bg-white md:text-xl mt-4 leading-18 p-4 md:p-8 font-bold'>
          <p className='w-full md:w-3/4'>
            **You are on the basic plan and so you can only allocate only a maximum of 1 BANK ACCOUNT and 1 CRYPTO WALLET, Upgrade to Premium to see how many accounts you are entitled.**
          </p>
        </div>

        <div className='flex  md:flex-row items-center justify-center  gap-4 w-full flex-col md:justify-between'>
          <BalanceCard />
          <BalanceCard />
          <BalanceCard />


          <BalanceCard />

          <BalanceCard />

          <FaTrash className='text-4xl' />

        </div>

        <div className="btns flex gap-3">
          <button
            className='bg-purple-600 font-bold text-white py-3 px-6 rounded-md'
          >Add Wallet</button>
          <button
            className='bg-purple-600 font-bold text-white py-3 px-6 rounded-md'>
            Delete Wallet</button>

        </div>

        <div className='flex items-center justify-center w-full h-50'>
          <div className="bg-white flex w-full h-32 flex-col justify-center p-8 items-center">

            <h5>Ooops!</h5>
            <p>You haven't added an allocated Account</p>
            <button
            onClick={onOpen}
            className='bg-purple-600 font-bold text-white py-3 px-6 rounded-md'
          >Add Account</button>
            
          </div>
        </div>
        {onOpen &&  <AccountCreationModal onClose={onClose} isOpen={isOpen}  />}
      

      </div>
    
    </AunthenticatedLayout>
  )
}

export default Account