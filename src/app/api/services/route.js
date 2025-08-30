import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);  

    const services = await db.collection("services").find({}).toArray();

    return Response.json(services);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
