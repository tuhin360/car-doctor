// File: src/app/api/popular-products/route.js

import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 9;

    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const products = await db
      .collection("popular_products")
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db
      .collection("popular_products")
      .countDocuments();

    const totalPages = Math.ceil(total / limit);

    return new Response(
      JSON.stringify({
        products,
        totalPages,
        currentPage: page,
        total,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch popular products" }),
      { status: 500 }
    );
  }
}
