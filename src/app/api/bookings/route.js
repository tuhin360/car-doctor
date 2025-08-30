import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// POST: add a booking
export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const result = await db.collection("bookings").insertOne(body);

    return NextResponse.json(
      { message: "Booking created", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

// GET: fetch logged-in user's bookings
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const bookings = await db
      .collection("bookings")
      .find({ email: session.user.email })
      .toArray();

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

