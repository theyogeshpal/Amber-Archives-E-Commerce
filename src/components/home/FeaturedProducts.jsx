import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    // Mock data - in real app fetch from API
    const products = [
        { id: 1, name: 'Wireless Headphones', price: 129, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
        { id: 2, name: 'Smart Watch', price: 199, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Gadgets' },
        { id: 3, name: 'Running Shoes', price: 89, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Fashion' },
        { id: 4, name: 'Stylish Backpack', price: 59, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Accessories' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">Check out our top-rated products that everyone is talking about.</p>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 group">
                            <div className="h-64 overflow-hidden relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 m-2 rounded-full">
                                    Top Rated
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-yellow-600 font-bold uppercase tracking-wider">{product.category}</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                                    <button className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md transform hover:rotate-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/products" className="inline-block px-8 py-3 border-2 border-yellow-400 text-yellow-600 font-bold rounded-full hover:bg-yellow-400 hover:text-white transition duration-300">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
