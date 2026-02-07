import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const sections = [
    {
        title: "30-Day Returns",
        icon: <AssignmentReturnIcon className="text-yellow-500" />,
        content: "If you're not completely satisfied with your purchase, you can return it within 30 days of delivery. The item must be in its original, unused condition with all tags and packaging intact."
    },
    {
        title: "Effortless Process",
        icon: <SpeedIcon className="text-yellow-500" />,
        content: "Initiating a return is simple. Visit your profile archive or contact our support vault to receive a pre-paid shipping label. Pack your item securely and drop it off at any authorized shipping point."
    },
    {
        title: "Full Refunds",
        icon: <VerifiedIcon className="text-yellow-500" />,
        content: "Once we receive and inspect your returned piece, we will process your refund within 5-7 business days. The amount will be credited back to your original payment method."
    },
    {
        title: "Exchange Policy",
        icon: <LocalShippingIcon className="text-yellow-500" />,
        content: "Found something else in our archives? We offer free exchanges for different sizes or colors. Simply choose the 'Exchange' option during your return request."
    },
    {
        title: "Quality Guarantee",
        icon: <CheckCircleIcon className="text-yellow-500" />,
        content: "Every item in Amber Archives is inspected for perfection. If you receive a damaged or defective piece, we will provide an immediate replacement or full refund at no extra cost."
    },
    {
        title: "Dedicated Support",
        icon: <SupportAgentIcon className="text-yellow-500" />,
        content: "Our curators are here to help with any questions regarding your return or exchange. Reach out to our 24/7 support vault for personalized assistance."
    }
];

const ReturnsPolicy = () => {
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
                {/* Header section - Aligned with Brand Aesthetic */}
                <Box className="text-center mb-20 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-gray-900 text-[10px] font-black mb-6 tracking-widest uppercase">
                        Customer Assurance
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter">
                        Returns <span className="text-yellow-500">& Refunds</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                        "Elegance is guaranteed, and your satisfaction is our commitment."
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
                                        Secure Return
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
                            <AssignmentReturnIcon sx={{ fontSize: 32 }} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need <span className="text-yellow-400">assistance?</span></h2>
                        <p className="text-gray-400 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
                            Our support vault is open 24/7 to help you with any return or refund inquiries.
                        </p>
                        <button className="px-12 py-5 bg-yellow-400 text-gray-900 font-black rounded-2xl hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 active:scale-95 text-lg">
                            Start a Return Request
                        </button>
                        <p className="mt-10 text-gray-500 text-xs font-bold uppercase tracking-widest">
                            Official Archive Policy • Amber Archives
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

export default ReturnsPolicy;
