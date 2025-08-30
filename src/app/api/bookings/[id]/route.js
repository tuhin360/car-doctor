import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// DELETE: delete a booking
export async function DELETE(req, { params }) {
  try {
    // Check if user is logged in
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Please login first" }, { status: 401 });
    }

    // Get booking ID
    const { id } = params;
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // Delete the booking
    const result = await db.collection("bookings").deleteOne({
      _id: ObjectId.createFromHexString(id),
      email: session.user.email, // Only delete user's own bookings
    });

    // Check if booking was found and deleted
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // Success response
    return NextResponse.json({ message: "Booking deleted successfully" });
    
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}