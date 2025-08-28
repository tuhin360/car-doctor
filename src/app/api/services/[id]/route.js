// app/api/services/[id]/route.js
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb"; // Important: For MongoDB _id lookup

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate ID
    if (!id) {
      return Response.json({ error: "Service ID is required" }, { status: 400 });
    }

    // Connect to DB
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // Find service by _id (as ObjectId)
    const service = await db
      .collection("services")
      .findOne({ _id: new ObjectId(id) });

    // If no service found
    if (!service) {
      return Response.json({ error: "Service not found" }, { status: 404 });
    }

    // Return the service
    return Response.json(service);
  } catch (error) {
    console.error("Error fetching service:", error);

    // Handle invalid ObjectId format
    if (error.name === "BSONTypeError") {
      return Response.json({ error: "Invalid service ID format" }, { status: 400 });
    }

    return Response.json({ error: "Failed to fetch service" }, { status: 500 });
  }
}