import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";
// import { ObjectId } from "mongodb";

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

// DELETE: delete a booking
// export async function DELETE(req, { params }) {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const { id } = params;
//     if (!id) {
//       return NextResponse.json({ error: "Booking ID is required" }, { status: 400 });
//     }

//     const client = await clientPromise;
//     const db = client.db(process.env.DB_NAME);

//     // Delete booking only if it belongs to logged-in user
//     const result = await db.collection("bookings").deleteOne({
//       _id: new ObjectId(id),
//       email: session.user.email,
//     });

//     if (result.deletedCount === 0) {
//       return NextResponse.json({ error: "Booking not found or unauthorized" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Booking deleted successfully" }, { status: 200 });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 });
//   }
// }