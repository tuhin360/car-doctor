'use client'
import React  from 'react';
import { useState } from 'react';
import { FaTools, FaCalendar, FaUser, FaArrowRight, FaSearch, FaTags, FaClock } from 'react-icons/fa';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Electronics', 'Appliances', 'Automotive', 'Tips & Tricks', 'Industry News'];

    const blogPosts = [
        {
            id: 1,
            title: "10 Common Appliance Problems and How to Fix Them",
            excerpt: "Learn about the most frequent appliance issues homeowners face and discover simple solutions that can save you time and money.",
            category: "Appliances",
            author: "John Smith",
            date: "Nov 10, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
        },
        {
            id: 2,
            title: "Signs Your Electronics Need Professional Repair",
            excerpt: "Don't ignore these warning signs! Discover when it's time to bring your electronics to a professional repair service.",
            category: "Electronics",
            author: "Sarah Johnson",
            date: "Nov 8, 2025",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
        },
        {
            id: 3,
            title: "Preventive Maintenance Tips for Your Car",
            excerpt: "Regular maintenance can extend your vehicle's life significantly. Here are essential tips every car owner should know.",
            category: "Automotive",
            author: "Mike Davis",
            date: "Nov 5, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
        },
        {
            id: 4,
            title: "The Latest Trends in Repair Technology",
            excerpt: "Explore how cutting-edge technology is revolutionizing the repair industry and improving service quality.",
            category: "Industry News",
            author: "Emily Chen",
            date: "Nov 3, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        },
        {
            id: 5,
            title: "DIY vs Professional Repair: Making the Right Choice",
            excerpt: "When should you tackle a repair yourself, and when should you call the experts? We break down the decision-making process.",
            category: "Tips & Tricks",
            author: "Tom Anderson",
            date: "Nov 1, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
        },
        {
            id: 6,
            title: "Understanding Warranty Coverage for Repairs",
            excerpt: "Navigate the complex world of warranties and learn how to maximize your coverage for repairs and replacements.",
            category: "Tips & Tricks",
            author: "Lisa Martinez",
            date: "Oct 28, 2025",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-center mb-4">
                        <FaTools className="w-12 h-12 mr-4" />
                        <h1 className="text-5xl font-bold">Repair Blog</h1>
                    </div>
                    <p className="text-xl text-center text-orange-100 max-w-3xl mx-auto">
                        Expert tips, industry insights, and helpful guides for all your repair needs
                    </p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-6xl mx-auto px-6 -mt-8">
                <div className="bg-black text-white rounded-xl shadow-xl p-6 border-2 border-orange-500">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Search Bar */}
                        <div className="relative">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none text-white"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <FaTags className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none text-white appearance-none cursor-pointer"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-black mb-6">Featured Article</h2>
                <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-l-4 border-orange-500 hover:shadow-2xl transition-shadow">
                    <div className="grid md:grid-cols-2">
                        <div className="h-64 md:h-auto bg-gray-200">
                            <img 
                                src={blogPosts[0].image} 
                                alt={blogPosts[0].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {blogPosts[0].category}
                                </span>
                                <span className="text-gray-500 text-sm flex items-center">
                                    <FaClock className="mr-1" /> {blogPosts[0].readTime}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">{blogPosts[0].title}</h3>
                            <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-gray-500 text-sm">
                                    <FaUser className="mr-2" />
                                    <span>{blogPosts[0].author}</span>
                                    <FaCalendar className="ml-4 mr-2" />
                                    <span>{blogPosts[0].date}</span>
                                </div>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center">
                                    Read More <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-6xl mx-auto px-6 pb-16">
                <h2 className="text-3xl font-bold text-black mb-6">Latest Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.slice(1).map(post => (
                        <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-black hover:border-orange-500 transition-all hover:shadow-2xl">
                            <div className="h-48 bg-gray-200 overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-xs flex items-center">
                                        <FaClock className="mr-1" /> {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3 hover:text-orange-500 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                    <span className="flex items-center">
                                        <FaUser className="mr-1" /> {post.author}
                                    </span>
                                    <span className="flex items-center">
                                        <FaCalendar className="mr-1" /> {post.date}
                                    </span>
                                </div>
                                <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                                    Read Article <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                    </div>
                )}
            </div>

            {/* Newsletter Section */}
            <div className="bg-black text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-300 mb-8">
                        Get the latest repair tips, industry news, and special offers delivered to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-6 py-3 rounded-lg bg-gray-900 border-2 border-gray-700 focus:border-orange-500 focus:outline-none text-white flex-1 max-w-md"
                        />
                        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Need Professional Repair Services?</h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Our expert technicians are ready to help you with any repair needs
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors border-2 border-white">
                        Contact Us Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;