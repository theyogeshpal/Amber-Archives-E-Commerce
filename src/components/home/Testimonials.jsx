import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: 'John Doe', role: 'Verified Buyer', rating: 5, text: "Amazing service! The delivery was super fast and the product quality exceeded my expectations. Will definitely shop again.", image: "https://i.pravatar.cc/100?img=11" },
        { id: 2, name: 'Jane Smith', role: 'Fashion Enthusiast', rating: 5, text: "I love the variety of products available. The website is so easy to navigate and the yellow theme looks fantastic!", image: "https://i.pravatar.cc/100?img=5" },
        { id: 3, name: 'Mike Johnson', role: 'Tech Geek', rating: 5, text: "Got the best deal on my new laptop. Customer support was very helpful in guiding me to the right product.", image: "https://i.pravatar.cc/100?img=3" },
        { id: 4, name: 'Emily Davis', role: 'Regular Shopper', rating: 5, text: "The checkout process is smooth and secure. I appreciate the multiple payment options available.", image: "https://i.pravatar.cc/100?img=9" },
        { id: 5, name: 'Chris Brown', role: 'Gadget Lover', rating: 5, text: "Top-notch quality gadgets. The descriptions are accurate and the reviews really help in making a decision.", image: "https://i.pravatar.cc/100?img=13" },
        { id: 6, name: 'Sarah Wilson', role: 'Home Decorator', rating: 5, text: "Found beautiful decor items for my home. Packaging was excellent, everything arrived intact.", image: "https://i.pravatar.cc/100?img=20" },
        { id: 7, name: 'David Lee', role: 'Fitness Buff', rating: 5, text: "Great collection of sports gear. The prices are competitive and the return policy is hassle-free.", image: "https://i.pravatar.cc/100?img=15" },
        { id: 8, name: 'Lisa Taylor', role: 'Bookworm', rating: 5, text: "Huge selection of books. I love the personalized recommendations based on my browsing history.", image: "https://i.pravatar.cc/100?img=28" },
        { id: 9, name: 'Tom Harris', role: 'Music Producer', rating: 5, text: "Bought some audio equipment here. Genuine products and fast shipping. Highly recommended!", image: "https://i.pravatar.cc/100?img=8" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsVisible(1);
            } else {
                setItemsVisible(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Star rating component
    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                            ⭐ Customer Reviews
                        </span>
                    </div>
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied customers who love shopping with us
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Dedicated wrapper for slider track to avoid clipping buttons */}
                    <div className="overflow-hidden">
                        {/* Slider Track */}
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                            }}
                        >
                            {/* We replicate the first few items at the end to allow for a seamless transition
                                where the last item is shown alongside the first ones. */}
                            {[...testimonials, ...testimonials.slice(0, itemsVisible)].map((testimonial, idx) => (
                                <div
                                    key={`${testimonial.id}-${idx}`}
                                    className="flex-shrink-0 px-4 py-8"
                                    style={{ width: `${100 / itemsVisible}%` }}
                                >
                                    <div
                                        className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl relative h-full flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-500 border border-yellow-100 hover:border-yellow-300"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/5 group-hover:to-orange-400/5 rounded-3xl transition-all duration-500"></div>

                                        <div className="relative z-10">
                                            <div className="absolute -top-4 -left-2 text-7xl text-yellow-400/30 font-serif leading-none">"</div>
                                            <StarRating rating={testimonial.rating} />
                                            <p className="text-gray-700 mb-6 leading-relaxed relative z-10 font-medium">
                                                {testimonial.text}
                                            </p>
                                        </div>

                                        <div className="flex items-center mt-auto relative z-10">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-14 h-14 rounded-full mr-4 border-2 border-yellow-400 shadow-lg ring-4 ring-yellow-100 group-hover:ring-yellow-200 transition-all duration-300"
                                                />
                                                <div className="absolute -bottom-1 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                                <span className="text-sm text-yellow-600 font-semibold flex items-center gap-1">
                                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons - Improved visibility and positioning */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -ml-6 md:-ml-12 bg-white/90 text-gray-900 p-4 rounded-full shadow-2xl border border-yellow-200 hover:bg-yellow-400 hover:text-white transition-all duration-300 z-20 transform hover:scale-110 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 -mr-6 md:-mr-12 bg-white/90 text-gray-900 p-4 rounded-full shadow-2xl border border-yellow-200 hover:bg-yellow-400 hover:text-white transition-all duration-300 z-20 transform hover:scale-110 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Indicators - Centered correctly using flex */}
                <div className="flex justify-center w-full mt-12 space-x-3 pointer-events-auto">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                ? 'w-12 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg'
                                : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                        ></button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
