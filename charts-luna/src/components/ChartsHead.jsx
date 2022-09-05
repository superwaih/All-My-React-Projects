import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

const ChartsHead = () => {
    const[coins, setCoins] = useState([])
    useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=terra-luna&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h'
          )
          .then(res => {
            setCoins(res.data);
            // console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
  return (
    <div className='p-6 flex justify-evenly text-[14px] space-x-2 m-auto opacity-80 mt-4 w-11/12 bg-[#04306b]'>
       {coins.map((e, i) => {
           return(
               <>
            <div className="coin-pair items-center font-bold text-white flex space-x-1">
            <h2>LUNA</h2>
            <span>/</span>
            <h2>USD</h2>
        </div>

        <div className="coin-price">
            <h2 className='text-gray-300'>{e.current_price}</h2>
            <h2 className='text-white'>${e.current_price}</h2>
        </div>

        <div className="24hr-change text-[13px]">
            <h2 className='text-gray-300'>24h Change</h2>
            <h2 className= {e.price_change_percentage_24h > 0 ?'text-green-400' : 'text-red-600'}>{e.price_change_percentage_24h > 0 ? '+' + e.price_change_percentage_24h.toFixed(2) : '-' + e.price_change_percentage_24h.toFixed(2) }</h2>
        </div>

        <div className="24hr-change text-[13px] hidden md:block">
            <h2 className='text-gray-300'>24h Low</h2>
            <h2 className='text-white'>{e.low_24h}</h2>
        </div>

        <div className="24hr-change text-[13px] hidden md:block">
            <h2 className='text-gray-300' >24h High</h2>
            <h2 className='text-white'>{e.high_24h}</h2>
        </div>
        </>
            

           )
       })}
       
        


        </div>
  )
}

export default ChartsHead