import React, { useEffect, useState } from 'react'
import { Tablerow } from './tablerow'
import axios from 'axios'; 
// productName
// : 
// "Ceramic Mug"
// totalQuantity
// : 
// 3
// totalRevenue
// : 
// 100
// year

export const TotalPurchasePerProductPerYear = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("/api/total-purchases-per-product-per-year").then((Response)=>{
          
          setData(Response.data)
        }).catch((err)=>{
          console.log("error retriving data",err)
        })
          },[])
  return (
    <div>
        <div style={{marginTop: '0.5rem'}}><h3>1.Total Purchase Per Product Per Year</h3></div>
        <table  border="1">
    <tr>
      <th>Product Name</th>
      <th>Year</th>
      <th>Total Quantity</th>
      <th>Total Revenue</th>
    </tr>
     
     {data?.map((stats)=>(
        <Tablerow
        rowData={{ column1: stats.productName 
             , column2: stats.year, column3:stats.totalQuantity
             ,column4:stats.totalRevenue }}
        />
     ))}
     
  </table></div>
  )
}
