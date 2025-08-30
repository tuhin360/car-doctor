"use client";
import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";

const MyBookingsTable = ({ bookings = [], onDeleteBooking }) => {
  console.log("Bookings", bookings);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg font-medium">
            No bookings found.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Book a service to see it here!
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-hidden rounded-xl border border-gray-200">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    No
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {bookings.map((booking, index) => (
                  <tr
                    key={booking._id || index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-center font-medium text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={booking.serviceImage || "/placeholder-service.jpg"}
                          alt={booking.serviceName}
                          className="h-12 w-12 object-cover rounded-lg border shadow-sm"
                          onError={(e) => {
                            e.target.src = "/placeholder-service.jpg";
                          }}
                        />
                        <div className="font-medium text-gray-900">
                          {booking.serviceName}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {new Date(booking.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : booking.status === "cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {booking.status || "Pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center space-x-2">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition text-sm font-medium">
                          Edit
                        </button>
                        <DeleteBookingButton
                          id={booking._id}
                          onDelete={onDeleteBooking}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-5">
            {bookings.map((booking, index) => (
              <div
                key={booking._id || index}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                    #{index + 1}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : booking.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.status || "Pending"}
                  </span>
                </div>

                {/* Service Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={booking.serviceImage || "/placeholder-service.jpg"}
                    alt={booking.serviceName}
                    className="h-20 w-20 object-cover rounded-lg border shadow-sm flex-shrink-0"
                    onError={(e) => {
                      e.target.src = "/placeholder-service.jpg";
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {booking.serviceName}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <svg
                        className="w-4 h-4 mr-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {new Date(booking.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 px-3 py-2 rounded   bg-blue-500 text-white   shadow hover:bg-blue-600 transition text-sm font-medium">
                    Edit Booking
                  </button>
                  <div className="flex-shrink-0">
                    <DeleteBookingButton
                      id={booking._id}
                      onDelete={onDeleteBooking}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookingsTable;
