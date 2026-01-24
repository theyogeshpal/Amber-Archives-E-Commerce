import React from 'react';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import contactHero from '../assets/contact-hero.png';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-110">
                    <img
                        src={contactHero}
                        alt="Contact Amber Archives"
                        className="w-full h-full object-cover brightness-50 animate-zoom-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <div className="overflow-hidden">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tighter animate-reveal">
                            Connect With Us
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-amber-200 font-medium max-w-2xl mx-auto animate-fade-in-up animation-delay-500 opacity-0 fill-mode-forwards">
                        Whether you have a question or just want to say hi, we're here for you.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            { icon: <Email />, title: 'Email Us', info: 'support@amberarchives.com', color: 'bg-blue-50 text-blue-600' },
                            { icon: <Phone />, title: 'Call Us', info: '+1 (555) 123-4567', color: 'bg-green-50 text-green-600' },
                            { icon: <LocationOn />, title: 'Visit Us', info: 'Amber Archives, Gomti Nagar, Lucknow, UP 226010', color: 'bg-amber-50 text-amber-600' }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up opacity-0 fill-mode-forwards" style={{ animationDelay: `${idx * 200}ms` }}>
                                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.info}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="relative group p-10 bg-white rounded-3xl border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] animate-fade-in-left opacity-0 fill-mode-forwards">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
                            <form className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us more about your inquiry..."
                                        className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button className="group w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-amber-500/30">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-50 py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
                    <div className="w-full h-[450px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl animate-fade-in-up opacity-0 fill-mode-forwards border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113896.53327663363!2d80.85966601246014!3d26.848101684302633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706100000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Amber Archives Lucknow Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
