import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeader from "./SectionHeader";

export default async function ServicesPage() {
  // 🔧 Use environment variable if API URL changes
  const res = await fetch("http://localhost:3000/api/services", {
    cache: "no-store",
  });

  const services = await res.json();

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeader
        subtitle={"Our Services"}
        title={"Our Service Area"}
        description={
          "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
      />

      {/* Services Grid */}
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
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 line-clamp-2">
                {service.title}
              </h3>

              {/* Price & CTA */}
              <div className="flex justify-between items-center mt-auto pt-2">
                <p className="text-xl font-bold text-orange-500">
                  ${service.price}
                </p>

                {/* CTA Button with Glow Effect */}
                <button className="relative group hover:scale-110 transition-transform duration-300 focus:outline-none">
                  <Link
                    href={`/services/${service._id}`}
                    className="text-orange-500 flex items-center justify-center p-2 rounded-full hover:text-black transition-colors duration-300"
                    aria-label="View service details"
                  >
                    <FaArrowRight size={20} />

                    {/* Orange glow circle on hover */}
                    <span
                      className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-20 
                                 scale-75 group-hover:scale-150 transition-all duration-300 pointer-events-none"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "More Services" Button */}
      <div className="flex justify-center mt-12">
        <Link href={"/services"}>
          <button
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-lg 
                           hover:bg-orange-500 hover:text-white 
                           transition-all duration-300 ease-in-out 
                           focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 cursor-pointer"
          >
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
}
