import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CookieIcon from '@mui/icons-material/Cookie';
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';

const sections = [
    {
        title: "Introduction",
        icon: <HandshakeIcon className="text-yellow-500" />,
        content: "At Amber Archives, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or make a purchase."
    },
    {
        title: "Information We Collect",
        icon: <VisibilityIcon className="text-yellow-500" />,
        content: "We collect information you provide directly to us, such as your name, email address, shipping address, and payment details when you place an order. We also automatically collect certain information about your device and how you interact with our site."
    },
    {
        title: "How We Use Your Data",
        icon: <SecurityIcon className="text-yellow-500" />,
        content: "Your data helps us process your orders, provide customer support, and improve our services. We may also use your contact information to send you updates about your orders or promotional offers, which you can opt-out of at any time."
    },
    {
        title: "Cookies and Tracking",
        icon: <CookieIcon className="text-yellow-500" />,
        content: "We use cookies to enhance your experience, remember your preferences, and analyze our traffic. By using our site, you consent to our use of cookies as described in this policy."
    },
    {
        title: "Data Security",
        icon: <GavelIcon className="text-yellow-500" />,
        content: "We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or disclosure. Your sensitive data, such as payment information, is encrypted using SSL technology."
    },
    {
        title: "Your Rights",
        icon: <SecurityIcon className="text-yellow-500" />,
        content: "You have the right to access, update, or delete your personal information. If you have any questions or requests regarding your data, please contact our privacy team."
    }
];

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Animations matching Brand Identity */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-10%] w-[45%] h-[45%] bg-yellow-400/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-yellow-200/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[10%] w-[20%] h-[20%] bg-yellow-50/30 rounded-full blur-[80px] animate-float"></div>

                {/* Mesh Gradient Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
            </div>

            <Container maxWidth="lg" className="relative z-10">
                {/* Header section - Aligned with Featured Collections Style */}
                <Box className="text-center mb-20 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-gray-900 text-[10px] font-black mb-6 tracking-widest uppercase">
                        Legal Center
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter">
                        Privacy <span className="text-yellow-500">Policy</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                        "Your trust is our archive's most precious asset."
                    </p>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-8 rounded-full"></div>
                </Box>

                {/* Content Sections in Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="group animate-fade-in-up h-full"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Box
                                className="relative pt-10 px-10 pb-16 bg-white border-2 border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center"
                            >
                                <div className="p-5 bg-gray-900 text-yellow-400 rounded-2xl shadow-xl transition-transform group-hover:scale-110 duration-500 mb-8">
                                    {section.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {section.content}
                                    </p>
                                </div>

                                {/* Absolute Badge Effect */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="px-4 py-1.5 bg-yellow-400/20 text-yellow-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-yellow-200">
                                        Verified Policy
                                    </div>
                                </div>
                            </Box>
                        </div>
                    ))}
                </div>

                {/* Footer Section Dark Variant */}
                <Box className="mt-32 p-12 md:p-20 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-[100px] animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-yellow-400 text-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-yellow-400/20">
                            <SecurityIcon sx={{ fontSize: 32 }} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need more <span className="text-yellow-400">clarification?</span></h2>
                        <p className="text-gray-400 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
                            Our legal team is committed to transparency. Reach out if you have concerns about your data.
                        </p>
                        <button className="px-12 py-5 bg-yellow-400 text-gray-900 font-black rounded-2xl hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 active:scale-95 text-lg">
                            Contact Legal Support
                        </button>
                        <p className="mt-10 text-gray-500 text-xs font-bold uppercase tracking-widest">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </Box>
            </Container>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 10s infinite alternate ease-in-out; }
                .animation-delay-2000 { animation-delay: 2s; }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float { animation: float 7s ease-in-out infinite; }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
};

export default PrivacyPolicy;
