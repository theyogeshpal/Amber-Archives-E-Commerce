import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Email, Lock, ArrowForward, Visibility, VisibilityOff, WarningAmber } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import loginBg from '../assets/login-bg.png';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Admin credentials check
        if (email === 'admin@gmail.com' && password === 'admin@123') {
            login({ name: 'Admin User', email: email });
            navigate('/profile');
        } else {
            setError('Invalid email or password. Please try again.');
        }
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

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-[460px] px-6 animate-fade-in-up">
                <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/20 shadow-[0_32px_120px_-15px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-10">
                        <div className="inline-block p-4 bg-yellow-400 rounded-3xl mb-6 shadow-xl shadow-yellow-400/20 transform -rotate-6">
                            <Lock className="text-gray-900" sx={{ fontSize: 32 }} />
                        </div>
                        <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Vault Access</h2>
                        <p className="text-white/60 font-medium">Enter your credentials to unlock</p>
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

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.2em] ml-1">Secret Password</label>
                            <div className="group relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:bg-white/10 transition-all duration-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                                >
                                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-2xl shadow-yellow-400/20 mt-10"
                        >
                            Authorize Entry
                            <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-12 text-center space-y-4">
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                            New to the archives? <Link to="/register" className="text-yellow-400 hover:underline">Request access</Link>
                        </p>
                        {/* <div className="pt-4 border-t border-white/5">
                            <p className="text-[10px] text-white/20 font-medium leading-relaxed">
                                Default Credentials for Verification:<br />
                                <span className="text-yellow-400/40">admin@gmail.com / admin@123</span>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="absolute bottom-8 text-center mb-5 z-10 w-full">
                <p className="text-white/10 text-[10px] font-bold tracking-[0.4em] uppercase">
                    Timeless Heritage &bull; Secure Protocol
                </p>
            </div>
        </div>
    );
};

export default Login;
