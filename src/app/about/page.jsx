import { FaTools, FaAward, FaUsers, FaClock, FaShieldAlt, FaChartLine, FaCertificate, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "10K+", label: "Repairs Completed" },
        { number: "98%", label: "Success Rate" },
        { number: "24/7", label: "Support Available" }
    ];

    const values = [
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Quality Assurance",
            description: "We stand behind every repair with comprehensive warranties and quality guarantees."
        },
        {
            icon: <FaClock className="w-8 h-8" />,
            title: "Fast Turnaround",
            description: "Industry-leading repair times without compromising on quality or attention to detail."
        },
        {
            icon: <FaAward className="w-8 h-8" />,
            title: "Certified Technicians",
            description: "Our team holds industry certifications and undergoes continuous training."
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Customer First",
            description: "Your satisfaction is our priority. We build lasting relationships through trust."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-center mb-4">
                        <FaTools className="w-12 h-12 mr-4" />
                        <h1 className="text-5xl font-bold">About Us</h1>
                    </div>
                    <p className="text-xl text-center text-orange-100 max-w-3xl mx-auto">
                        Leading the industry in professional repair services with commitment to excellence
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-6 -mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-black text-white rounded-lg shadow-xl p-6 text-center border-2 border-orange-500">
                            <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                            <div className="text-gray-300 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12 border-l-4 border-orange-500">
                    <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-4">
                            Founded with a mission to revolutionize the repair industry, we've grown from a small workshop 
                            to a trusted name serving thousands of satisfied customers. Our journey began with a simple belief: 
                            quality repairs shouldn't be complicated or overpriced.
                        </p>
                        <p className="mb-4">
                            Today, we combine traditional craftsmanship with cutting-edge technology to deliver repairs that 
                            meet and exceed industry standards. Our state-of-the-art facility is equipped with the latest 
                            diagnostic tools and repair equipment, ensuring precision and reliability in every job we undertake.
                        </p>
                        <p>
                            We're not just fixing things—we're building relationships, one repair at a time. Our commitment 
                            to transparency, quality, and customer satisfaction has made us the preferred choice for both 
                            individuals and businesses.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="max-w-6xl mx-auto px-6 pb-16">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-black text-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-orange-500 hover:border-orange-400">
                            <div className="text-orange-500 mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Industry Standards Section */}
            <div className="bg-black text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-center mb-8">
                        <FaChartLine className="w-10 h-10 text-orange-500 mr-3" />
                        <h2 className="text-3xl font-bold">Industry Standards & Certifications</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gray-900 rounded-lg border border-orange-500">
                            <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <FaCertificate className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">ISO Certified</h3>
                            <p className="text-gray-400 text-sm">Meeting international quality management standards</p>
                        </div>
                        <div className="text-center p-6 bg-gray-900 rounded-lg border border-orange-500">
                            <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <FaShieldAlt className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Industry Compliance</h3>
                            <p className="text-gray-400 text-sm">Adhering to all safety and regulatory requirements</p>
                        </div>
                        <div className="text-center p-6 bg-gray-900 rounded-lg border border-orange-500">
                            <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <FaCheckCircle className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Expert Team</h3>
                            <p className="text-gray-400 text-sm">Certified professionals with ongoing training</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Join thousands of satisfied customers who trust us with their repairs
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors border-2 border-white">
                        Get a Free Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;