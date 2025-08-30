import Image from "next/image";

const CoverSection = ({title}) => {
  return (
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
      <h2 className="absolute top-1/2 left-6 md:left-1/12 transform -translate-y-1/2 text-white font-bold text-3xl sm:text-4xl md:text-5xl drop-shadow-md">
       {title}
      </h2>
    </div>
  );
};

export default CoverSection;
