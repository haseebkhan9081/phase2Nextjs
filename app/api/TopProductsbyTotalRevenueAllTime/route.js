 
import { NextResponse } from "next/server";
import { db } from "/lib/db.js"; 

export async function GET() {
    try {
        // Retrieve data for total revenue per product
        const productRevenue = await db.history.groupBy({
            by: ['itemid'],
            _sum: {
                total: true,
            },
            orderBy: {
                _sum: {
                    total: 'desc',
                },
            },
        });

        // Process the data to include product names
        const productRevenueWithNames = await Promise.all(productRevenue.map(async (row) => {
            const product = await db.product.findUnique({
                where: {
                    id: row.itemid,
                },
                select: {
                    productName: true,
                },
            });
            return {
                productName: product.productName,
                totalRevenue: row._sum.total,
            };
        }));

        
        return NextResponse.json(productRevenueWithNames);
    } catch (error) {
        console.error("Error in GET endpoint:", error);
        return new NextResponse("Error while retrieving data", { status: 501 });
    }
}

export const revalidate = 0;