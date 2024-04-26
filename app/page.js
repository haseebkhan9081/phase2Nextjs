export const fetchCache = 'force-no-store';
"use client"
import { TotalPurchasePerProductPerYear } from "./components/ total-purchases-per-product-per-year";
import { NumberOfBuyersPerLocation } from "./components/NumberOfBuyersPerLocation";
import { TheMostThreeProductsBoughtOverTheLastSixMonths } from "./components/TheMostThreeProductsBoughtOverTheLastSixMonths";
import { TopThreebuyers } from "./components/TopThreebuyers";
import { TopProductsbyTotalRevenueAllTime } from "./components/TopProductsbyTotalRevenueAllTime";
import { TopSellers } from "./components/TopSellers";

export default function Home() {

  
  return (
     
      <div style={{
        width: "100%",
        
         
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1>E-commerce Statistics</h1>
      <h1 style={{ 
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  marginBottom: '5px'
}}><b>HANDMADE ENGINEER</b></h1>

<div style={{
       paddingBottom:'40px',
      backgroundColor: '#F5F5DC',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
     
    }}>
{/*  Stats#1 total purchase per product per year */}
<TotalPurchasePerProductPerYear/>
{/*Stats#2 number of buyers per location  */}
<NumberOfBuyersPerLocation/>

{/* Stat#3 The Most 3 products bought over the last 6 months */}
<TheMostThreeProductsBoughtOverTheLastSixMonths/>

{/* Stat#4 The top 3 buyers of all time */}
<TopThreebuyers/>
{/* Stat#5 Top Products by Total Revenue All Time */}
<TopProductsbyTotalRevenueAllTime/>
{/* Stat#6 Top Sellers of All time */}
<TopSellers/>
</div >
</div>
    
    
  );
}
