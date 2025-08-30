// import clientPromise from "@/lib/mongodb";
import clientPromise from "../../../lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME); // Database name from environment variable

    const services = await db.collection("services").find({}).toArray();

    return Response.json(services);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

// POST: Add a new service
export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON from request
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // Insert into services collection
    const result = await db.collection("bookings").insertOne(body);

    return Response.json(
      { message: "Service created successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}

