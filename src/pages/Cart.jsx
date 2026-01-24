import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowForward, AutoAwesome } from '@mui/icons-material';
import emptyCartImg from '../assets/empty-cart.png';

const Cart = () => {
    return (
        <div className="bg-white min-h-screen pt-10">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Your Archive</h1>
                    <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Empty State Redesign */}
                    <div className="relative group animate-fade-in-up animation-delay-500 opacity-0 fill-mode-forwards">
                        <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-colors duration-700"></div>

                        <div className="relative bg-white border border-gray-100 rounded-[3rem] p-12 md:p-20 shadow-[0_32px_120px_-15px_rgba(0,0,0,0.05)] text-center overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-amber-500/10">
                                <ShoppingBag className="w-48 h-48 -rotate-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-10 transform group-hover:scale-105 transition-transform duration-700">
                                    <div className="relative inline-block">
                                        <img
                                            src={emptyCartImg}
                                            alt="Empty Archive"
                                            className="w-full max-w-[400px] h-auto rounded-2xl shadow-2xl mx-auto brightness-95 contrast-105"
                                        />
                                        <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-xl shadow-lg animate-float">
                                            <AutoAwesome />
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your selection is currently empty</h2>
                                <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                                    Your personal archive is waiting for its first collection. Discover pieces that define your style.
                                </p>

                                <Link
                                    to="/products"
                                    className="group inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-amber-600 transition-all duration-300 shadow-xl hover:shadow-amber-500/30"
                                >
                                    Start Exploring
                                    <ArrowForward className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-20 py-10 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase">
                        Curated Selection &bull; Global Shipping &bull; Timeless Quality
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
