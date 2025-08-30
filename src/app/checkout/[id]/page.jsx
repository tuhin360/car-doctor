import CoverSection from "../../../components/CoverSection";
import CheckoutForm from "../../../components/forms/CheckoutForm";

const CheckoutPage = async ({ params }) => {
  const { id } = await params;

  let data = null;

  try {
    const res = await fetch(`http://localhost:3000/api/services/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Service not found");
    data = await res.json();
    console.log(data);
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
          <p className="text-gray-500 mt-2">
            The requested service could not be loaded.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Cover Section */}
      <CoverSection title={"Check Out"} />
      <CheckoutForm data={data} />
      {JSON.stringify(data)}
    </div>
  );
};

export default CheckoutPage;
