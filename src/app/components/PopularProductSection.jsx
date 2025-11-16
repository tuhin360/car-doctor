import ProductCard from "../../components/ProductCard";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

export default async function PopularProductSection() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/popular-products`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch popular products");

    const data = await res.json();
    const popularProducts = data.products || data;

    return (
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Popular Products"
          title="Browse Our Products"
          description="Discover our most loved car care solutions — expertly crafted, customer-approved, and designed to keep your vehicle in top condition."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts?.slice(0, 6).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/popularProducts?page=1">
            <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out">
              More Products
            </button>
          </Link>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading popular products:", error);

    return (
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Popular Products"
          title="Browse Our Products"
          description="Discover our most loved car care solutions."
        />
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">
            Unable to load products. Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
