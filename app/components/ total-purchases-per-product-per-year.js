import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TotalPurchasePerProductPerYear = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Generate a timestamp to append to the URL
        const timestamp = new Date().getTime();
        
        // Append the timestamp to the URL
        const apiUrl = `/api/total-purchases-per-product-per-year?timestamp=${timestamp}`;
        
        axios.get(apiUrl)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("Error retrieving data", error);
            });
    }, []);

    return (
        <div>
            <div style={{ marginTop: '0.5rem' }}>
                <h3>1.Total Purchase Per Product Per Year</h3>
            </div>
            <table border="1">
                <tr>
                    <th>Product Name</th>
                    <th>Year</th>
                    <th>Total Quantity</th>
                    <th>Total Revenue</th>
                </tr>
                {data?.map((stats) => (
                    <tr key={stats.id}>
                        <td>{stats.productName}</td>
                        <td>{stats.year}</td>
                        <td>{stats.totalQuantity}</td>
                        <td>{stats.totalRevenue}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
