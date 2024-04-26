import { NextResponse } from "next/server";
import { db } from "/lib/db.js";

export async function POST(req) {
    try {
         const data=await req.json();
          const {id}=data; 
const seller=await db.seller.findMany({
    where:{
        id:id 
    }
})

console.log(seller[0])
return NextResponse.json(seller[0]||[]);
    } catch (error) {
        console.log("api/seller/get error", error);
        return new NextResponse("Error while INITIALIZING DB", { status: 501 });
    }
}

 
