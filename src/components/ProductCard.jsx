// components/ProductCard.jsx
"use client";

import { FaStar, FaRegStar } from "react-icons/fa6";
import Rating from "react-rating";
import { HiOutlineShoppingBag } from "react-icons/hi2";


export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      {/* 🛍️ Hover Bag Icon (PC Only) */}
      <div className="hidden md:block absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 z-10">
        <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl border border-gray-100 hover:bg-orange-50 cursor-pointer transition-all duration-300 hover:scale-110">
          <HiOutlineShoppingBag className="text-orange-500" size={24} />
        </div>
      </div>

      {/* Image */}
      <div className="relative h-56 md:h-64 rounded-t-xl m-4 flex items-center justify-center bg-[#F3F3F3]">
        <img
          src={product.img}
          alt={product.title}
          width={156}
          height={156}
          className="object-contain w-40 h-40 md:w-48 md:h-48 p-3"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col text-center">
        {/* Rating */}
        <div className="flex items-center justify-center mb-2">
          <Rating
            readonly
            initialRating={product.rating}
            emptySymbol={<FaRegStar className="text-gray-400 text-lg" />}
            fullSymbol={<FaStar className="text-orange-500 text-lg" />}
            fractions={2}
          />
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-xl font-bold text-orange-500">${product.price}</p>

        {/* 🛒 Add to Cart Button (Mobile Only) */}
        <div className="mt-4 md:hidden">
          <button className="w-1/2 mx-auto bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
            <HiOutlineShoppingBag size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}