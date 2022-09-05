import React, { useEffect } from 'react';
import { useState, Component } from 'react';
import Chart from 'react-apexcharts';


function ChartBox (){
  const [pricedata, setPricedata] = useState(null);
  const [loading, setLoading] = useState(true);
 
 

  const formatData= (data) =>{
    return data.map((dat) => {
      return{
        x: (new Date(dat[0])),
        y: +dat[1].toFixed(2)


      }
    }
    )
  }

 

 


  useEffect(() => {
    const fetchData = () =>{
      fetch('https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=usd&days=7&interval=1')
      .then(res =>{
          return res.json()
      })
      .then(data => {
          setLoading(false)
          setPricedata(formatData(data.prices))
      })

    }
    fetchData()
    console.log(pricedata)
     

  }, [])
  


   
  
      return (
          // <div className=' bg-[#04306b] w-11/12 m-auto p-6 mt-4'>
           
           <Chart options={{
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          type: 'datetime'
        } 
      }} 
      series={[{
        name: 'series-1',
        data: pricedata
      }]}   type="line" width={600} height={300} />
    
          // </div>
      )
  }

  export default ChartBox;




