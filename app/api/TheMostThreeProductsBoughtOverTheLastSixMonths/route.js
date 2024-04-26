import { NextResponse } from "next/server";
import { db } from "/lib/db.js"; 

export async function GET() {
    try {
        // Calculate the date 6 months ago
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        // Retrieve data for the top 3 products bought over the last 6 months
        const topProducts = await db.history.groupBy({
            by: ['itemid'],
            _sum: {
                quantity: true,
            },
            where: {
                date: {
                    gte: sixMonthsAgo,
                },
            },
            orderBy: {
                _sum: {
                    quantity: 'desc',
                },
            },
            take: 3,
        });
 
        // Create an array to store the product data with names
        const data = [];

        // Loop through the topProducts array
        for (const row of topProducts) {
            // Find the product name using the itemid
            const product = await db.product.findUnique({
                where: {
                    id: row.itemid
                }
            });
            
            // Push the product data with name to the data array
            data.push({
                productName: product.productName,
                quantity: row._sum.quantity,
            });
        }
 

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in GET endpoint:", error);
        return new NextResponse("Error while retrieving data", { status: 501 });
    }
}
