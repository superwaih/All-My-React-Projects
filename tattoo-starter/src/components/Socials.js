import React from 'react';
import { socialData } from '../data';
const Socials = () => {
  return <ul className='flex justify-center items-center gap-x-[30px]'>
    {socialData.map((social) => {
      return (
        <li  key={social.name} >
          <a href={social.href}>{social.icon}</a>
        </li>
      )
    })}
  </ul>;
};

export default Socials;
