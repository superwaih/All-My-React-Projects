import React from 'react';
import { navData } from '../data';
import Socials from './Socials';
const NavMobile = () => {
  const { items } = navData
  return <nav className='h-full overflow-hidden w-full flex  flex-col justify-evenly
  bg-white
  '>
    <ul className='flex flex-col justify-center items-center 
    py-6
    gap-y-6'>
     {items.map((item, i) => {
      return(
        <li key={i}>
            <a href={item.href} 
            className="text-2xl font-primary uppercase"
            >{item.name}</a>
        </li>
      )
     })}
    </ul>
    <div className="text-2xl">
      <Socials />
    </div>
  </nav>;
};

export default NavMobile;
