import React, { useState } from 'react'
import { useLocation, Link, } from "react-router-dom"

const AunthenticatedLayout = ({ children }) => {
  
  const dashboard = "/dashboard"
  const payroll = "/payroll"
  const account = "/account"
  const employee = "/account/employee"
  const history = "/history"


  const params = useLocation()
  const pathName = params.pathname
  const [activeTab, setActivePage] = useState()
  return (
    <div className='relative min-h-screen text-black bg-gray-200 w-full'>
      <nav className='flex justify-between bg-white shadow px-8 py-4 items-center'>
        <div className='font-bold text-2xl'>
          payroller
        </div>
        <ul className='hidden md:flex gap-4  text-xl justify-between'>
          <Link to="/dashboard">
            <li
              className={pathName === dashboard ? "navLink relative" : ""}
            >Dashboard</li>
          </Link>
          <Link to="/payroll">
            <li
              className={pathName === payroll ? "navLink relative" : ""}
            >
              Payroll
            </li>
          </Link>
          <Link to="/account">
            <li
              className={pathName === account ? "navLink relative" : ""}
            >Account</li>
          </Link>
          <Link to="employee">
            <li
              className={pathName === employee ? "navLink relative" : ""}
            >Employees</li>
          </Link>
          <Link to="/history">
            <li
              className={pathName === history ? "navLink relative" : ""}
            >History</li>

          </Link>
        </ul>


        <div className="user flex gap-2 items-center">
          <div className="user-icon h-12 bg-blue-100 p-4 text-center flex items-center border border-red-500 rounded-full">
            PS
          </div>
          <div className='text-[13px] font-semibold'>
            <h3>Centiiv Team</h3>
            <h4>Centiivorganization@gmail.com</h4>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
      <div className="footer justify-center  mt-4 text-2xl flex items-center text-center text-gray-700">
        Payroller (2022), is a registered trademark and or copyright of centiiv and all rights have been reserved.
      </div>
    </div>
  )
}

export default AunthenticatedLayout