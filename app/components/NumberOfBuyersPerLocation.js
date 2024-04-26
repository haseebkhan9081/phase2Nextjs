import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TableRowForNumberOfBuyersPerLocation } from './TableRowForNumberOfBuyersPerLocation'

export const NumberOfBuyersPerLocation = () => {
    const [data,setData]=useState([])
    useEffect(()=>{

axios.get("/api/numberOfBuyersPerLocation").then((response)=>{
   setData(response.data) 
}).catch((Err)=>{
    console.log("an error occured while fetching data")
})
    },[])
  return (
    <div
    style={{marginTop: '0.5rem',
    textAlign:"left"}}>
        <h3 style={{textAlign:"left"}}>2. Numbe of Buyers Per Location</h3>
        <table border="1">
    <tr>
      <th>Location</th>
      <th>Number of Buyers</th>
    </tr>
     
      {data?.map((stat)=>(
        <TableRowForNumberOfBuyersPerLocation
        rowData={{column1:stat.location,column2:stat.numberOfBuyers
}}
        />
      ))}
     
  </table>

    </div>
  )
}
