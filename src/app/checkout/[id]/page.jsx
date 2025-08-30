import CoverSection from "../../../components/CoverSection";
import CheckoutForm from "../../../components/forms/CheckoutForm";

const CheckoutPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
      </div>
    );
  }

  const data = await res.json();

  return (
    <div className="my-20">
      <CoverSection title="Check Out" />
      <CheckoutForm data={data} />
    </div>
  );
};

export default CheckoutPage;
