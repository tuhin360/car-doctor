"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {

//   console.log("Service Data", data);

const { data: session } = useSession();
//   console.log("Logged in User Data", session);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const bookingPayload = {
      // Session info
      customerName: name,
      email,

      // User input
      date,
      phone,
      address,

      // Extra info
      serviceId: data._id,
      serviceName: data.title,
      serviceImage: data.img,
      servicePrice: data.price,
    };

    // log all values
    console.log("Booking Payload", bookingPayload);

    try {
      const res = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      });

      if (!res.ok) {
        throw new Error("Failed to confirm order");
      }

      const result = await res.json();
      console.log(result);
       toast.success("Your order has been confirmed!");
      form.reset();
    } catch (error) {
      console.error("Error order service:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className=" bg-[#F3F3F3] shadow-md rounded-xl p-8 sm: mt-16 md:mt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Book Service : {data?.title}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={session?.user?.name}
            readOnly
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={session?.user?.email}
            readOnly
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Due Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Due Amount
          </label>
          <input
            type="number"
            name="amount"
            defaultValue={data?.price}
            readOnly
            placeholder="Amount"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Confirm Order Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#FF3811] hover:bg-[#f53610] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200 mb-6"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
