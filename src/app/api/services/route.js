// import clientPromise from "../../../lib/mongodb";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.DB_NAME);  

//     const services = await db.collection("services").find({}).toArray();

//     return Response.json(services);
//   } catch (error) {
//     return Response.json(
//       { error: "Failed to fetch services" },
//       { status: 500 }
//     );
//   }
// }


import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // Read page & limit from URL
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;  // default page = 1
    const limit = Number(searchParams.get("limit")) || 6; // default 6 items per page

    const skip = (page - 1) * limit;

    // Count total documents
    const total = await db.collection("services").countDocuments();
    const totalPages = Math.ceil(total / limit);

    // Fetch paginated services
    const services = await db
      .collection("services")
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    // Return final JSON
    return Response.json({
      services,
      totalPages,
      currentPage: page,
    });

  } catch (error) {
    console.error("API Error:", error);

    return Response.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
