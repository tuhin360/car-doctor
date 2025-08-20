export default async function ServicesPage() {
  // Next.js server component fetch
  const res = await fetch("http://localhost:3000/api/services", {
    cache: "no-store", // সর্বশেষ fresh data আনার জন্য
  });
  const services = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="p-4 border rounded-lg shadow bg-white"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="font-bold mt-2">${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
