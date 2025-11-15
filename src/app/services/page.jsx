import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SectionHeader from "../components/SectionHeader";

export default async function ServicesPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = 6;

  try {
    const res = await fetch(
      `http://localhost:3000/api/services?page=${page}&limit=${limit}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch services");

    const { services, totalPages } = await res.json();

    return (
      <div className="py-12 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our All Services"
          title="Our Service Area"
          description="We offer a wide range of professional car services to keep your vehicle running smoothly."
        />

        {/* Grid */}
        {services?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={300}
                    height={208}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 line-clamp-2">
                    {service.title}
                  </h3>

                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-xl font-bold text-orange-500">
                      ${service.price}
                    </p>

                    <Link
                      href={`/services/${service._id}`}
                      className="relative group p-2 text-orange-500 rounded-full hover:text-black transition duration-300"
                    >
                      <FaArrowRight size={20} />

                      <span className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-20 scale-75 group-hover:scale-150 transition-all duration-300 pointer-events-none" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No services available at the moment.
            </p>
          </div>
        )}

        {/* Simple Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Previous Button */}
            {page > 1 ? (
              <Link
                href={`/services?page=${page - 1}`}
                className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
              >
                <FaChevronLeft size={14} />
                <span>Previous</span>
              </Link>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed"
              >
                <FaChevronLeft size={14} />
                <span>Previous</span>
              </button>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/services?page=${pageNum}`}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  pageNum === page
                    ? "bg-orange-500 text-white"
                    : "border border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {pageNum}
              </Link>
            ))}

            {/* Next Button */}
            {page < totalPages ? (
              <Link
                href={`/services?page=${page + 1}`}
                className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
              >
                <span>Next</span>
                <FaChevronRight size={14} />
              </Link>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed"
              >
                <span>Next</span>
                <FaChevronRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Our Services"
          title="Our Service Area"
          description="We offer a wide range of professional car services."
        />

        <div className="text-center py-12">
          <p className="text-red-500 text-lg">
            Unable to load services. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}