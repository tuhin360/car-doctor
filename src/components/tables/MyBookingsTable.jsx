"use client";

const MyBookingsTable = ({ bookings = [] }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Service Image</th>
                <th className="px-4 py-2 border">Service Name</th>
                <th className="px-4 py-2 border">Service Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id || index}
                  className="text-center hover:bg-gray-50"
                >
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <img
                      src={booking.serviceImage}
                      alt={booking.serviceName}
                      className="h-12 w-12 object-cover rounded-md mx-auto"
                    />
                  </td>
                  <td className="px-4 py-2 border">{booking.serviceName}</td>
                  <td className="px-4 py-2 border">{booking.date}</td>
                  <td className="px-4 py-2 border">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                      Edit
                    </button>
                  </td>
                  <td className="px-4 py-2 border">
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookingsTable;
