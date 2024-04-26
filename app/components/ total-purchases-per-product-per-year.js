import React, { useEffect, useState } from 'react';

export const TotalPurchasePerProductPerYear = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const timestamp = new Date().getTime(); // Generate a unique timestamp
                const response = await fetch(`/api/total-purchases-per-product-per-year?_cache=${timestamp}`);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.log("Error retrieving data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div style={{ marginTop: '0.5rem' }}>
                <h3>1.Total Purchase Per Product Per Year</h3>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Year</th>
                        <th>Total Quantity</th>
                        <th>Total Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((stats) => (
                        <tr key={stats.id}>
                            <td>{stats.productName}</td>
                            <td>{stats.year}</td>
                            <td>{stats.totalQuantity}</td>
                            <td>{stats.totalRevenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
