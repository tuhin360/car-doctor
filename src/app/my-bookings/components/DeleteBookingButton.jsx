"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteBookingButton = ({ id, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id) => {
    // Check if ID exists
    if (!id) {
      toast.error("Booking ID is missing");
      return;
    }

    // Confirm before deleting
    const confirmed = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmed) return;

    try {
      setIsDeleting(true);
      
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        toast.error("Failed to delete booking");
        return;
      }

      const data = await response.json();
      console.log(data);
      
      // Show success message
      toast.success("Booking deleted successfully!");
      
      // Remove from UI instantly by calling parent's onDelete function
      if (onDelete) {
        onDelete(id);
      }

    } catch (error) {
      console.error("Error deleting booking:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => handleDelete(id)} 
        disabled={isDeleting}
        className={`px-3 py-2 rounded transition text-sm font-medium ${
          isDeleting
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600 cursor-pointer"
        }`}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </>
  );
};

export default DeleteBookingButton;