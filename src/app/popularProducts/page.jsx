// src/app/popularProducts/page.jsx
import ProductCard from "../../components/ProductCard";
// import SectionHeader from "../../components/SectionHeader";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SectionHeader from "../components/SectionHeader";

export default async function PopularProductsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 6;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/popular-products?page=${page}&limit=${limit}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    const { products, totalPages } = await res.json();

    return (
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Popular Products"
          title="All Popular Products"
          description="Discover our most loved car care solutions."
        />

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {page > 1 ? (
              <Link href={`/popularProducts?page=${page - 1}`} className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white flex items-center gap-2">
                <FaChevronLeft size={14} /> Previous
              </Link>
            ) : (
              <button disabled className="px-4 py-2 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed flex items-center gap-2">
                <FaChevronLeft size={14} /> Previous
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <Link
                key={num}
                href={`/popularProducts?page=${num}`}
                className={`px-4 py-2 rounded-lg transition ${num === page ? "bg-orange-500 text-white" : "border border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"}`}
              >
                {num}
              </Link>
            ))}

            {page < totalPages ? (
              <Link href={`/popularProducts?page=${page + 1}`} className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white flex items-center gap-2">
                Next <FaChevronRight size={14} />
              </Link>
            ) : (
              <button disabled className="px-4 py-2 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed flex items-center gap-2">
                Next <FaChevronRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    );
  } catch (err) {
    return (
      <div className="py-12 px-6 max-w-7xl mx-auto text-center">
        <p className="text-red-500 text-lg">Unable to load products. Try again later.</p>
      </div>
    );
  }
}
