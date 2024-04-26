import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const TopSellers = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
axios.get("/api/topSellers").then((response)=>{
setData(response.data)
}).catch((Err)=>{
    console.log("error while fetching data",Err)
})

 
    },[])
  return (
    <div style={{marginTop:'0.5rem'}}><h3>6.Top Sellers of All time</h3>
    
    <table border="1">
    <tr>
      <th>Seller Name</th>
      <th>Total Revenue Generated</th>
    </tr>
     
      {data?.map((stat)=>(
         <tr>
         <td>{stat.seller}</td>
         <td>{stat.totalRevenue}</td>
          
       </tr>
      ))}
     
  </table>   
    </div>
  )
}
