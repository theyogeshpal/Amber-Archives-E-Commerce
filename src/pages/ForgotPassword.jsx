import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Email, ArrowForward, WarningAmber, MarkEmailRead } from '@mui/icons-material';
import loginBg from '../assets/login-bg.png';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // In a real app, this would call an API
        // For now, we simulate success
        if (email.includes('@')) {
            setIsSubmitted(true);
        } else {
            setError('Please enter a valid email identifier.');
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
            {/* Immersive Background matching Login */}
            <div className="absolute inset-0 z-0">
                <img
                    src={loginBg}
                    alt="Amber Archives Boutique"
                    className="w-full h-full object-cover brightness-[0.7] animate-zoom-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Forgot Password Card */}
            <div className="relative z-10 w-full max-w-[460px] px-6 animate-fade-in-up">
                <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/20 shadow-[0_32px_120px_-15px_rgba(0,0,0,0.5)]">
                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-10">
                                <div className="inline-block p-4 bg-yellow-400 rounded-3xl mb-6 shadow-xl shadow-yellow-400/20 transform rotate-6">
                                    <Email className="text-gray-900" sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Recover Key</h2>
                                <p className="text-white/60 font-medium">Enter your email to reset your vault access</p>
                            </div>

                            {error && (
                                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400 animate-shake">
                                    <WarningAmber fontSize="small" />
                                    <p className="text-xs font-bold leading-tight">{error}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.2em] ml-1">Email Identifier</label>
                                    <div className="group relative">
                                        <Email className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:bg-white/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-2xl shadow-yellow-400/20 mt-10"
                                >
                                    Reset Password
                                    <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-10">
                            <div className="inline-block p-4 bg-green-500 rounded-3xl mb-6 shadow-xl shadow-green-500/20 animate-bounce">
                                <MarkEmailRead className="text-white" sx={{ fontSize: 32 }} />
                            </div>
                            <h2 className="text-3xl font-black text-white mb-4">Email Sent!</h2>
                            <p className="text-white/60 font-medium mb-10 leading-relaxed">
                                We've sent a recovery link to <span className="text-yellow-400">{email}</span>. Please check your inbox.
                            </p>
                            <Link
                                to="/login"
                                className="inline-block px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl border border-white/10 transition-all active:scale-95"
                            >
                                Back to Login
                            </Link>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        {!isSubmitted && (
                            <Link to="/login" className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors">
                                Back to Entry Portal
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="absolute bottom-8 text-center mb-1 z-10 w-full">
                <p className="text-white/10 text-[10px] font-bold tracking-[0.4em] uppercase">
                    Secure Recovery Protocol &bull; Amber Archives
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
