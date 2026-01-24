import React from 'react';
import { Verified, Public, SupportAgent, Stars } from '@mui/icons-material';
import aboutHero from '../assets/about-hero.png';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-110">
                    <img
                        src={aboutHero}
                        alt="Amber Archives Hero"
                        className="w-full h-full object-cover brightness-50 animate-zoom-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <div className="overflow-hidden">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter animate-reveal">
                            Our Story
                        </h1>
                    </div>
                    <p className="text-lg md:text-2xl text-amber-300 font-medium max-w-3xl mx-auto animate-fade-in-up animation-delay-500 opacity-0 fill-mode-forwards px-4">
                        Curating collections that bridge the gap between timeless heritage and modern luxury.
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-amber-500 to-transparent"></div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-32">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="animate-slide-in-right opacity-0 fill-mode-forwards">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 border-l-8 border-amber-500 pl-6 md:pl-8 leading-tight">
                            The Essence of <br /><span className="text-amber-600">Amber Archives</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            Amber Archives was born from a simple yet profound vision: to make exquisite, curated collections accessible to those who appreciate the finer details in life. We believe that what you surround yourself with defines your journey.
                        </p>
                        <div className="p-6 md:p-8 bg-amber-50 rounded-2xl border-l-4 border-amber-500 animate-fade-in-up animation-delay-500 opacity-0 fill-mode-forwards">
                            <p className="text-base md:text-lg text-amber-900 leading-relaxed italic font-medium">
                                "Our mission is to simplify the way you shop for quality, ensuring every piece in our archive meets the highest standards of authenticity and timeless beauty."
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -top-10 -left-10 w-40 h-40 md:w-80 md:h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div className="relative bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:shadow-[0_32px_64px_-16px_rgba(251,191,36,0.2)] transition-all duration-700">
                            <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Amber Archives?</h3>
                            <ul className="space-y-6">
                                {[
                                    { icon: <Verified className="text-amber-600" />, text: 'Direct from curated sources', delay: 'animation-delay-500' },
                                    { icon: <Stars className="text-amber-600" />, text: 'Guaranteed authenticity', delay: 'animation-delay-700' },
                                    { icon: <Public className="text-amber-600" />, text: 'Global logistics network', delay: 'animation-delay-900' },
                                    { icon: <SupportAgent className="text-amber-600" />, text: 'Dedicated concierge support', delay: 'animation-delay-1100' }
                                ].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-4 text-gray-800 text-lg font-medium animate-fade-in-left opacity-0 fill-mode-forwards ${item.delay}`}>
                                        <div className="p-2 bg-amber-100 rounded-lg">{item.icon}</div>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="bg-gray-50 py-16 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-20 animate-fade-in-up opacity-0 fill-mode-forwards">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Pillars</h2>
                        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {[
                            { title: 'Quality First', desc: 'Every product is hand-picked and rigorously inspected before it enters our archive.', icon: <Stars fontSize="large" className="text-amber-500 group-hover:text-white transition-colors duration-500" />, delay: '' },
                            { title: 'Sustainability', desc: 'We prioritize eco-conscious partners and ethical manufacturing processes.', icon: <Public fontSize="large" className="text-amber-500 group-hover:text-white transition-colors duration-500" />, delay: 'animation-delay-500' },
                            { title: 'Customer Love', desc: 'Your satisfaction is our north star. Our team is available 24/7 for your needs.', icon: <SupportAgent fontSize="large" className="text-amber-500 group-hover:text-white transition-colors duration-500" />, delay: 'animation-delay-1000' }
                        ].map((item, idx) => (
                            <div key={idx} className={`group bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 animate-fade-in-up opacity-0 fill-mode-forwards ${item.delay}`}>
                                <div className="mb-6 p-4 bg-amber-50 w-fit rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
