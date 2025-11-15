import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaHeadset } from 'react-icons/fa';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <FaPhone className="w-8 h-8" />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            link: "tel:+15551234567"
        },
        {
            icon: <FaEnvelope className="w-8 h-8" />,
            title: "Email",
            details: ["info@repairpro.com", "support@repairpro.com"],
            link: "mailto:info@repairpro.com"
        },
        {
            icon: <FaMapMarkerAlt className="w-8 h-8" />,
            title: "Address",
            details: ["123 Repair Street", "New York, NY 10001"],
            link: "https://maps.google.com"
        },
        {
            icon: <FaClock className="w-8 h-8" />,
            title: "Business Hours",
            details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat-Sun: 9:00 AM - 4:00 PM"],
            link: null
        }
    ];

    const contactMethods = [
        {
            icon: <FaPhone className="w-12 h-12" />,
            title: "Call Us",
            description: "Speak directly with our repair specialists",
            action: "Call Now",
            link: "tel:+15551234567"
        },
        {
            icon: <FaWhatsapp className="w-12 h-12" />,
            title: "WhatsApp",
            description: "Quick response via WhatsApp messaging",
            action: "Chat on WhatsApp",
            link: "https://wa.me/15551234567"
        },
        {
            icon: <FaEnvelope className="w-12 h-12" />,
            title: "Email Us",
            description: "Send us detailed information about your repair",
            action: "Send Email",
            link: "mailto:info@repairpro.com"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
                    <p className="text-xl text-center text-orange-100 max-w-3xl mx-auto">
                        Get in touch with our team. We're here to help with all your repair needs.
                    </p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-6xl mx-auto px-6 -mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-black text-white rounded-lg shadow-xl p-6 border-2 border-orange-500 hover:border-orange-400 transition-colors">
                            <div className="text-orange-500 mb-3">{info.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-300 text-sm mb-1">
                                    {info.link && idx === 0 ? (
                                        <a href={info.link} className="hover:text-orange-500 transition-colors">
                                            {detail}
                                        </a>
                                    ) : (
                                        detail
                                    )}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Methods */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">How Would You Like to Reach Us?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 text-center border-l-4 border-orange-500 hover:shadow-2xl transition-shadow">
                            <div className="text-orange-500 flex justify-center mb-4">
                                {method.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">{method.title}</h3>
                            <p className="text-gray-600 mb-6">{method.description}</p>
                            <a 
                                href={method.link}
                                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                            >
                                {method.action}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 pb-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map */}
                    <div className="space-y-6">
                        <div className="bg-gray-200 rounded-xl shadow-lg overflow-hidden h-96 border-2 border-black">
                            <iframe
                                title="location-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        
                        <div className="bg-black text-white rounded-xl shadow-lg p-8 border-2 border-orange-500">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <FaMapMarkerAlt className="text-orange-500 mr-3" />
                                Visit Our Location
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Come visit our fully equipped repair facility. Our team is ready to assist you with all your repair needs.
                            </p>
                            <div className="space-y-2 text-gray-300">
                                <p><strong className="text-white">Address:</strong> 123 Repair Street, New York, NY 10001</p>
                                <p><strong className="text-white">Parking:</strong> Free parking available</p>
                                <p><strong className="text-white">Accessibility:</strong> Wheelchair accessible</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Why Choose Us */}
                        <div className="bg-gray-50 rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
                            <h3 className="text-2xl font-bold text-black mb-4">Why Choose Us?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl">✓</span>
                                    <div>
                                        <strong className="text-black">Fast Response Time</strong>
                                        <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl">✓</span>
                                    <div>
                                        <strong className="text-black">Certified Technicians</strong>
                                        <p className="text-gray-600 text-sm">Experienced and industry-certified professionals</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl">✓</span>
                                    <div>
                                        <strong className="text-black">Transparent Pricing</strong>
                                        <p className="text-gray-600 text-sm">Competitive rates with no hidden fees</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-3 mt-1 text-xl">✓</span>
                                    <div>
                                        <strong className="text-black">Quality Warranty</strong>
                                        <p className="text-gray-600 text-sm">Comprehensive warranty on all repairs</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* 24/7 Support */}
                        <div className="bg-black text-white rounded-xl shadow-lg p-8 border-2 border-orange-500">
                            <div className="flex items-center mb-4">
                                <FaHeadset className="text-orange-500 text-4xl mr-4" />
                                <h3 className="text-2xl font-bold">24/7 Emergency Support</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Need immediate assistance? Our emergency hotline is available round the clock for urgent repair needs.
                            </p>
                            <a href="tel:+15551234567" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                Emergency Hotline: +1 (555) 123-4567
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gray-50 rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
                            <h3 className="text-2xl font-bold text-black mb-4">Follow Us on Social Media</h3>
                            <p className="text-gray-600 mb-4">Stay updated with our latest services, tips, and special offers</p>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-12">
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Get Your Repair Done?</h3>
                    <p className="text-xl text-orange-100 mb-6">
                        Contact us today and experience professional repair service
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+15551234567" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors border-2 border-white">
                            Call Now
                        </a>
                        <a href="mailto:info@repairpro.com" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;