import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Close } from '@mui/icons-material';

const AuthPopup = ({ isOpen, onClose, message }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Popup Card */}
            <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_32px_100px_-10px_rgba(0,0,0,0.5)] overflow-hidden animate-zoom-in">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <Close />
                </button>

                <div className="p-10 text-center">
                    <div className="inline-block p-5 bg-yellow-400 text-gray-900 rounded-3xl mb-8 shadow-xl shadow-yellow-400/20 transform -rotate-12 animate-float">
                        <Lock sx={{ fontSize: 40 }} />
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">Vault Access Required</h3>
                    <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                        {message || "Please login to unlock this feature and add items to your personal archive."}
                    </p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => {
                                onClose();
                                navigate('/login');
                            }}
                            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all active:scale-[0.98] shadow-lg"
                        >
                            Sign In to Account
                        </button>
                        <button
                            onClick={() => {
                                onClose();
                                navigate('/register');
                            }}
                            className="w-full py-4 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-2xl hover:border-yellow-400 transition-all active:scale-[0.98]"
                        >
                            Claim Your Access
                        </button>
                    </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-2 w-full bg-yellow-400"></div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoom-in {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
                .animate-zoom-in {
                    animation: zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-12deg); }
                    50% { transform: translateY(-10px) rotate(-12deg); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}} />
        </div>
    );
};

export default AuthPopup;
