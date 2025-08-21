import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = params;

  let data = null;

  try {
    const res = await fetch(`http://localhost:3000/api/services/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Service not found");
    data = await res.json();
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
      {/* Hero Section */}
      <div className="relative my-8 md:my-12">
        <Image
          src="/assets/images/checkout/checkout.png"
          alt="Checkout"
          width={1280}
          height={300}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.2) 60%, transparent)",
          }}
        />
        <h2 className="absolute top-1/2 left-6 md:left-1/4 transform -translate-y-1/2 text-white font-bold text-3xl sm:text-4xl md:text-5xl drop-shadow-md">
          Service Details
        </h2>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-10 max-w-7xl mx-auto pb-20">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Service Image */}
          <Image
            src={data.img || "/assets/images/fallback.jpg"}
            alt={data.title}
            width={752}
            height={400}
            className="w-full h-auto rounded-xl object-cover"
          />

          {/* Title & Description */}
          <h3 className="text-3xl md:text-4xl font-bold">{data.title}</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            {data.description}
          </p>

          {/* Facilities Grid */}
          {Array.isArray(data.facility) && data.facility.length > 0 && (
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.facility.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg border-t-4 border-t-orange-500 p-5 shadow-sm hover:shadow transition"
                  >
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-gray-600 mt-1">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="text-base text-gray-600 leading-relaxed mt-6">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          {/* Steps Section */}
          <div className="mt-10">
            <h3 className="text-3xl font-bold mb-6">
              3 Simple Steps to Process
            </h3>
            <p className="text-base text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  img: "/assets/images/step/step01.png",
                  title: "Step One",
                  desc: "It uses a dictionary of over 200.",
                },
                {
                  img: "/assets/images/step/step02.png",
                  title: "Step Two",
                  desc: "It uses a dictionary of over 200.",
                },
                {
                  img: "/assets/images/step/step03.png",
                  title: "Step Three",
                  desc: "It uses a dictionary of over 200.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-5 border border-gray-200 rounded-lg hover:shadow-md transition"
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={83}
                    height={83}
                  />
                  <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                  <p className="text-gray-500 mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video-like Banner */}
          <div className="relative mt-10">
            <Image
              src="/assets/images/homeCarousel/2.jpg"
              alt="Service process"
              width={845}
              height={400}
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/images/services/playerImg.png"
                alt="Play"
                width={126}
                height={126}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          {/* Service List Buttons */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-2xl text-gray-800 mb-5">Services</h3>
            {[
              "Full Car Repair",
              "Engine Repair",
              "Automatic Services",
              "Engine Oil Change",
              "Battery Charge",
            ].map((service, i) => (
              <Link href="/services" key={i} className="flex w-full">
                <button
                  className={`flex items-center justify-between w-full px-6 py-4 mt-3 rounded-xl font-medium transition-all duration-300 ${
                    i === 0
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-300"
                  }`}
                >
                  <span>{service}</span>
                  <FaArrowRight
                    size={18}
                    className={i === 0 ? "text-white" : "text-orange-500"}
                  />
                </button>
              </Link>
            ))}
          </div>

          {/* Download Section */}
          <div className="bg-black p-6 rounded-xl text-white">
            <h3 className="font-bold text-2xl mb-6">Download</h3>
            {["Our Brochure", "Company Details"].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <FaFileAlt size={20} />
                  <div>
                    <h4 className="font-medium">{item}</h4>
                    <p className="text-sm text-gray-300">Download</p>
                  </div>
                </div>
                <div className="bg-orange-500 p-3 rounded-md hover:bg-orange-600 transition cursor-pointer">
                  <FaArrowRight size={18} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Logo & Special Offer */}
          <div className="bg-black p-6 rounded-xl text-white">
            <Image
              src="/assets/images/services/gearLogo.png"
              alt="Car Doctor Logo"
              width={141}
              height={115}
              className="mx-auto"
            />
            <h2 className="font-bold text-2xl text-center mt-4">Car Doctor</h2>
            <h3 className="font-bold text-lg text-center mt-2">
              Need Help? We Are Here To Help You
            </h3>

            {/* Special Offer */}
            <div className="relative mt-6 bg-white text-black p-5 rounded-lg shadow">
              <h4 className="font-bold text-xl">
                <span className="text-orange-500">Car Doctor</span> Special
              </h4>
              <p className="py-2">
                Save up to{" "}
                <span className="text-orange-500 font-semibold">60% off</span>
              </p>
              <div className="absolute -bottom-5 left-0 right-0 bg-orange-500 text-white py-3 rounded-lg mx-auto w-3/4 font-bold text-center hover:bg-orange-600 transition cursor-pointer">
                Get A Quote
              </div>
            </div>
          </div>

          {/* Price & Checkout */}
          <div className="space-y-5">
            <h3 className="font-bold text-3xl text-gray-800">
              Price: $
              {typeof data.price === "number"
                ? data.price.toFixed(2)
                : typeof data.price === "string"
                ? parseFloat(data.price).toFixed(2)
                : "N/A"}
            </h3>
            <Link href="/checkout">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
