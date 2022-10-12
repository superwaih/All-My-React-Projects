import React, { useState } from 'react'
import CreatePayrollCards from './CreatePayrollCards'
import { FiSmartphone } from "react-icons/fi"
import AunthenticatedLayout from '../AuthenticatedLayout'
import { useDisclosure } from '@chakra-ui/react'
import PayOnceModal from '../modals/PayOnceModal'

const CreatePayroll = () => {
    const{isOpen, onOpen, onClose} = useDisclosure()
   
    return (
        <AunthenticatedLayout>
            <div className='pt-12 space-y-4 px-8'>
                <h3 className='font-bold  text-center'>Create payroll</h3>
                <div className="create-payroll-cards grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                  
                    <CreatePayrollCards
                        Icon={FiSmartphone}
                        title="Pay Once"
                        onOpen={onOpen}
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex necessitatibus, pariatur provident eveniet soluta veniam animi facilis est corpor"
                    />


                    <CreatePayrollCards
                        Icon={FiSmartphone}
                        title="Pay At Intervals"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex necessitatibus, pariatur provident eveniet soluta veniam animi facilis est corpor"
                    />
                    <CreatePayrollCards
                        Icon={FiSmartphone}
                        title="Custom Payment"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex necessitatibus, pariatur provident eveniet soluta veniam animi facilis est corpor"
                    />

                </div>
            </div>
            {onOpen &&  <PayOnceModal onClose={onClose} isOpen={isOpen}  />}

        </AunthenticatedLayout>

    )
}

export default CreatePayroll

