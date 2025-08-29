// app/api/popular-products/route.js
// import clientPromise from "@/lib/mongodb";
import clientPromise from "../../../lib/mongodb";



export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const popularProducts = await db
      .collection("popular_products")
      .find({})
      .toArray();

     return Response.json(popularProducts);
      
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch popular products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

 
