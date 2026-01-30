import React, { useState } from 'react';
import { Person, Email, Lock, LockReset, ArrowForward, ChevronLeft, Phone, Home, PinDrop } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import registerBg from '../assets/register-bg.png';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        address: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:8081/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    mobile: formData.mobile,
                    address: formData.address,
                    pincode: formData.pincode
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Registration Success:', result);
                navigate('/login');
            } else {
                const errData = await response.json();
                setError(errData.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration Error:', err);
            setError('Could not connect to the server. Please check if the API is running.');
        } finally {
            setLoading(false);
        }
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

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-200 text-sm font-medium animate-shake text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                <div className="group relative">
                                    <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
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
                                        className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Mobile Number</label>
                                    <div className="group relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                        <input
                                            type="tel"
                                            name="mobile"
                                            placeholder="10-digit mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Pincode</label>
                                    <div className="group relative">
                                        <PinDrop className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                        <input
                                            type="text"
                                            name="pincode"
                                            placeholder="Area Pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em] ml-2">Residential Address</label>
                                <div className="group relative">
                                    <Home className="absolute left-4 top-4 text-white/40 group-focus-within:text-amber-500 transition-colors" />
                                    <textarea
                                        name="address"
                                        placeholder="Full address details"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        rows="2"
                                        className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                            className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
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
                                            className="w-full pl-12 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 space-y-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`group w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        <span>Saving Archive...</span>
                                    </div>
                                ) : (
                                    <>
                                        Register Archive
                                        <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
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
