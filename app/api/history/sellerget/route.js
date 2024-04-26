// Import necessary modules
import { NextResponse } from 'next/server';
import { db } from '/lib/db';

 

// Define the POST request handler for fetching purchase history
export async function POST(req) {
    try {
        // Extract the seller ID from the request body
        const {id} = await req.json();

         

        // Fetch the complete purchase history
        const history = await db.history.findMany();

        // Iterate over each history item and enrich it with product and customer details
        for (const h of history) {
            // Fetch the product details
            const product = await db.product.findUnique({
                where: {
                    id: h.itemid,
                },
            });
            h.product = product;

            // Fetch the customer details
            const customer = await db.customer.findUnique({
                where: {
                    id: h.customerid,
                },
            });
            h.customer = customer;
        }

        // Filter the processed history to include only the items associated with the specified seller ID
        const sellerHistory = history.filter(h => h.product.sellerID === parseInt(id));

        return NextResponse.json(sellerHistory);
    } catch (error) {
        // Return an error response if an error occurs
        console.error('Error fetching purchase history:', error);
        return new NextResponse('Error fetching purchase history', { status: 500 });
    }
}
