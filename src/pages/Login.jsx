import React, { useState } from 'react';
import { Smartphone, LockOpen, ArrowForward, ChevronLeft } from '@mui/icons-material';
import loginBg from '../assets/login-bg.png';

const Login = () => {
    const [step, setStep] = useState(1); // 1: Mobile No, 2: OTP
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    const handleMobileSubmit = (e) => {
        e.preventDefault();
        if (mobile) {
            setStep(2);
            // Simulate sending OTP
            console.log('Sending OTP to', mobile);
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        console.log('Verifying OTP', otp);
        // Add verification logic here
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={loginBg}
                    alt="Amber Archives Boutique"
                    className="w-full h-full object-cover brightness-[0.7] animate-zoom-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-charcoal-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-[440px] px-6 animate-fade-in-up">
                <div className="bg-white/20 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/20 shadow-[0_32px_120px_-15px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Welcome Back</h2>
                        <div className="w-12 h-1.5 bg-amber-500 mx-auto rounded-full mb-4"></div>
                        <p className="text-amber-100/70 font-medium">Access your curated collection</p>
                    </div>

                    {step === 1 ? (
                        <form onSubmit={handleMobileSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-amber-500/80 uppercase tracking-widest ml-1">Mobile Number</label>
                                <div className="group relative">
                                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                    <input
                                        type="tel"
                                        placeholder="Enter your mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="group w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20"
                            >
                                Send OTP
                                <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-xs font-bold text-amber-500/80 uppercase tracking-widest ml-1">Verification Code</label>
                                    <span className="text-[10px] text-white/40 italic">Sent to {mobile}</span>
                                </div>
                                <div className="group relative">
                                    <LockOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Enter 6-digit OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                        className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300 tracking-[0.5em] text-center"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button
                                    type="submit"
                                    className="group w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-black rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-amber-600/20"
                                >
                                    Verify & Login
                                    <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="w-full py-4 bg-transparent border border-white/20 text-white/70 font-bold rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Back to mobile
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-8 text-center">
                        <p className="text-white/40 text-sm">
                            New to Amber Archives? <a href="/register" className="text-amber-500 font-bold hover:underline">Join Us</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="absolute bottom-8 text-center z-10 w-full">
                <p className="text-white/20 text-xs font-medium tracking-[0.2em] uppercase">
                    Timeless Heritage &bull; Modern Luxury
                </p>
            </div>
        </div>
    );
};

export default Login;
