import React, { useState } from 'react';
import { Person, Email, Lock, LockReset, ArrowForward, ChevronLeft } from '@mui/icons-material';
import registerBg from '../assets/register-bg.png';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
        // Add registration logic here
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={registerBg}
                    alt="Amber Archives Atelier"
                    className="w-full h-full object-cover brightness-[0.75] animate-zoom-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"></div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

            {/* Registration Card */}
            <div className="relative z-10 w-full max-w-[500px] px-6 py-12 animate-fade-in-up">
                <div className="bg-white/20 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] border border-white/20 shadow-[0_32px_120px_-15px_rgba(0,0,0,0.3)]">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Create Archive</h2>
                        <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mb-4"></div>
                        <p className="text-amber-100/70 font-medium">Join our curated heritage collective</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Username</label>
                                <div className="group relative">
                                    <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Choose a username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                <div className="group relative">
                                    <Email className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Password</label>
                                    <div className="group relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Confirm</label>
                                    <div className="group relative">
                                        <LockReset className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 space-y-4">
                            <button
                                type="submit"
                                className="group w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20"
                            >
                                Register Archive
                                <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="/login"
                                className="w-full py-4 bg-transparent border border-white/10 text-white/60 font-bold rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Already have an account? Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="absolute bottom-6 text-center z-10 w-full">
                <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase">
                    Curated Heritage &bull; Timeless Luxury &bull; Global Archive
                </p>
            </div>
        </div>
    );
};

export default Register;
