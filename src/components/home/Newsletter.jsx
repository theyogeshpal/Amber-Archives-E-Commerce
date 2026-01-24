import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gray-900">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 -left-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 -right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-white/10 shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            <EmailIcon className="text-gray-900" sx={{ fontSize: 32 }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Join the <span className="text-yellow-400">Amber</span> Circle
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Be the first to know about exclusive collections, early access sales, and curated fashion inspiration.
                        </p>
                    </div>

                    <form className="relative max-w-2xl mx-auto group">
                        <div className="flex flex-col md:flex-row items-center gap-4 bg-white/10 p-2 rounded-3xl md:rounded-full border border-white/20 focus-within:border-yellow-400/50 transition-colors duration-300">
                            <div className="flex-1 w-full px-6 flex items-center gap-3">
                                <EmailIcon className="text-gray-400" sx={{ fontSize: 20 }} />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 w-full py-4 text-lg outline-none"
                                />
                            </div>
                            <button className="w-full md:w-auto px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-2xl md:rounded-full hover:bg-yellow-300 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                Subscribe <SendIcon sx={{ fontSize: 18 }} />
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Your privacy is safe with us. No spam, ever.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
