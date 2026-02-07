import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useToast } from '../context/ToastContext';

const GlobalToast = () => {
    const { toast } = useToast();

    return (
        <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 transform ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
            <Link
                to="/cart"
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 min-w-[300px] hover:bg-gray-800 transition-colors group border border-white/10"
            >
                <div className="bg-yellow-400 p-2 rounded-lg text-gray-900 group-hover:scale-110 transition-transform">
                    <ShoppingCartIcon fontSize="small" />
                </div>
                <div>
                    <p className="font-bold text-sm">{toast.title}</p>
                    <p className="text-xs text-gray-400">{toast.message}</p>
                </div>
                <div className="ml-auto text-yellow-400 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Cart
                </div>
            </Link>
        </div>
    );
};

export default GlobalToast;
