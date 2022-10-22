import React, {useEffect, useState} from 'react';
import Nav from "./Nav"
import Socials from "./Socials"
import NavMobile from "./NavMobile"
import {TiThMenuOutline} from "react-icons/ti"
import { headerData } from '../data';


const Header = () => {
  const {logo} = headerData
  const [isActive, setIsActive] = useState(false)
  const[navMobile, setNavMobile] = useState(false)
  useEffect(() =>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
      
    })
  }, [])
  return <header className={`${isActive ? ' h-[100px] shadow-lg ' 
  : 'h-[120px] lg:h-[150px]'}
   fixed left-0 right-0 top-0 z-10 
   mx-auto bg-white 
   max-w-[1920px] w-full transition-all duration-300
   `}>
   <div className="flex justify-between items-center pr-[60px] h-full pl-[50px]">
    <a href="/">
      <img className='w-[188px] h-[90px]' src={logo} alt="logo"  />
    </a>
    <div className="hidden xl:flex">
      <Nav />
    </div>

    <div
          onClick={() => setNavMobile(!navMobile)}
          className='xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-3xl text-white' />
        </div>

        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} 
          ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          }
           fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
         {/* nav mobile - is showing by default - hidden on desktop mode */}
         <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <div className='hidden xl:flex'>
          <Socials />
        </div>

   </div>
  </header>;
};

export default Header;
