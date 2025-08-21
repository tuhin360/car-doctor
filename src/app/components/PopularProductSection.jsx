import ProductCard from "@/components/ProductCard";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

export default async function PopularProductSection() {
  const res = await fetch("http://localhost:3000/api/popular-products", {
    cache: "no-store",
  });

  const popularProducts = await res.json();

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeader
        subtitle="Popular Products"
        title="Browse Our Products"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularProducts.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* More Products Button */}
      <div className="flex justify-center mt-12">
        <Link href="/popularProducts">
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 md:cursor-pointer">
            More Products
          </button>
        </Link>
      </div>
    </section>
  );
}
