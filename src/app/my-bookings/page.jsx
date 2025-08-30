"use client";

import { useEffect, useState } from "react";
import MyBookingsTable from "../../components/tables/MyBookingsTable";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-10">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 text-lg font-semibold">
          Fetching your bookings...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <MyBookingsTable bookings={bookings} />
    </div>
  );
};

export default MyBookings;
