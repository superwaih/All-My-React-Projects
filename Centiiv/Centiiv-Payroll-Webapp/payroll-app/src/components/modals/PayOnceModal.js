import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
   Button,
   useDisclosure,
   Text,
  } from '@chakra-ui/react'
import { useState } from 'react';
import {BsCalendar2Check} from "react-icons/bs"





  const PayOnceModal = ({isOpen, onClose}) => {
    
    const [userData, setUserData] = useState([])
    console.log(userData)

  
    return (
      <>
     
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal blockScrollOnMount={false} isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <div className='p-8 flex flex-col  gap-6'> 
            <h2 className='text-center font-bold'>Set up pay once</h2>
              <div className="input p-6 border flex gap-6  border-slate-500">
                
                <BsCalendar2Check className='text-xl text-center' />
               <div className='flex flex-col w-full gap-2'>
               <label htmlFor="number_employee">Number of Employees</label>
                <input type="date" name="" id="" />
               </div>
                

              </div>

              <div className='p-6 border flex justify-evenly  border-slate-500'>
                  <label htmlFor="number_employee">Number of Employees</label>
                  <input value={userData["number_of_employees"]} onChange={(e) => setUserData({...userData, "number_of_employees": e.target.value})} type="number" className='text-end' defaultValue={1} />
              </div>

              <div className='p-4 border flex justify-between border-slate-500'>
                  <label htmlFor="number_employee">Total Salary</label>
                  <input type="text" className='text-end' defaultValue={`N300000`} />
              </div>

              <div className='p-4 border flex justify-evenly border-slate-500'>
                  <label htmlFor="number_employee">Number of Employees</label>
                  <input type="text" className='text-end' defaultValue={1050} />
              </div>

              <div className='p-4 border flex justify-evenly border-slate-500'>
                  <label htmlFor="number_employee">Processing Fees</label>
                  <input type="text" className='text-end' value={1050} />
              </div>

              <div className='p-4 border bg-purple-600 justify-between flex  opacity-80 font-semibold border-slate-500'>
                  <label htmlFor="number_employee">Total Payable Charge</label>
                  <input type="text" className='text-end bg-inherit' value={1050} />
              </div>

              <div className="btn flex items-center justify-evenly">
                  <button onClick={onClose} className='bg-red-500 rounded-md text-white outline-none p-4'>Cancel</button>
                  <button className='bg-purple-500 text-white rounded-md outline-none p-4'>Submit</button>
              </div>
            </div>
           
          </ModalContent>
        </Modal>
      </>
    )
  }
export default PayOnceModal;

// <Button colorScheme='blue' mr={3} onClick={onClose}>
//                 Close
//               </Button>