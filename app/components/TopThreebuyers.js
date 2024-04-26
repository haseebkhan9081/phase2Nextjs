import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const TopThreebuyers = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
axios.get("/api/topThreeBuyers").then((response)=>{
    setData(response.data) 
}).catch((Err)=>{
    console.log("error while fetching data",Err);
})
    },[])
  return (
    <div style={{marginTop: '0.5rem'}}>
<h3>4.Top Three Buyers</h3>
<table border="1">
    <tr>
      <th>Customer Name</th>
      <th>Total Amount Spent</th>
    </tr>
     
      {data?.map((stat)=>(
         <tr>
         <td>{stat.customerName}</td>
         <td>{stat.totalSpent}</td>
          
       </tr>
      ))}
     
  </table>

    </div>
  )
}
