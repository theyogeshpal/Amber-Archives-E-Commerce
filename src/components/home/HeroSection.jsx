import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 text-white overflow-hidden min-h-[90vh] md:h-[90vh] flex items-center pt-10 pb-12 md:pt-0 md:pb-0">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-gray-900/90 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-in-up text-center md:text-left">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-gray-900 text-sm font-bold mb-4 tracking-wide uppercase">
                        New Arrival
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-md">
                        Discover <span className="text-yellow-400">Luxury</span> <br />
                        For Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Day</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Upgrade your wardrobe with our curated collection of premium fashion staples. Quality, comfort, and style in every stitch.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link to="/products" className="px-6 py-3 md:px-10 md:py-4 bg-yellow-400 text-gray-900 font-bold rounded-full text-base md:text-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform duration-300">
                            Start Shopping
                        </Link>
                        <Link to="/contact" className="px-6 py-3 md:px-10 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-base md:text-lg hover:bg-white hover:text-gray-900 transition duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center relative scale-90 md:scale-100">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] animate-float">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-blob"></div>
                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Shopping Model"
                            className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/20"
                        />

                        {/* Floating Cards - Hidden on very small screens, visible from sm up */}
                        <div className="absolute top-5 -left-5 sm:top-10 sm:-left-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl animate-bounce animation-delay-2000 hidden sm:block">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xs sm:text-base">★</div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold">Best Ratings</p>
                                    <p className="text-xs sm:text-sm font-bold text-gray-900">5.0 Stars</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 -right-2 sm:bottom-20 sm:-right-5 bg-white p-3 sm:p-4 rounded-xl shadow-xl animate-bounce hidden sm:block">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs sm:text-base">✓</div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold">New Season</p>
                                    <p className="text-xs sm:text-sm font-bold text-gray-900">Out Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
