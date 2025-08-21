// components/SectionHeader.js
export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center mb-12">
      {/* Subtitle, Title, and Description */}
      <h4 className="text-lg md:text-xl font-semibold text-orange-500 mb-2 tracking-wide">
        {subtitle}
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
        {title}
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
