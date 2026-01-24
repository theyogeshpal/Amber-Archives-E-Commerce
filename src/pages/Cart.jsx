import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    ArrowForward,
    AutoAwesome,
    Add,
    Remove,
    DeleteOutline,
    LocalShipping,
    VerifiedUser,
    Loop
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import emptyCartImg from '../assets/empty-cart.png';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const subtotal = getCartTotal();
    const shipping = subtotal > 5000 ? 0 : 499; // Free shipping over ₹5000
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;

    if (cart.length === 0) {
        return (
            <div className="bg-white min-h-screen pt-10">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Your Archive</h1>
                        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative group animate-fade-in-up animation-delay-500 opacity-0 fill-mode-forwards">
                            <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-colors duration-700"></div>

                            <div className="relative bg-white border border-gray-100 rounded-[3rem] p-12 md:p-20 shadow-[0_32px_120px_-15px_rgba(0,0,0,0.05)] text-center overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-amber-500/10">
                                    <ShoppingBag className="w-48 h-48 -rotate-12" />
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-10 transform group-hover:scale-105 transition-transform duration-700">
                                        <div className="relative inline-block">
                                            <img
                                                src={emptyCartImg}
                                                alt="Empty Archive"
                                                className="w-full max-w-[400px] h-auto rounded-2xl shadow-2xl mx-auto brightness-95 contrast-105"
                                            />
                                            <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-xl shadow-lg animate-float">
                                                <AutoAwesome />
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your selection is currently empty</h2>
                                    <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                                        Your personal archive is waiting for its first collection. Discover pieces that define your style.
                                    </p>

                                    <Link
                                        to="/products"
                                        className="group inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-amber-600 transition-all duration-300 shadow-xl hover:shadow-amber-500/30"
                                    >
                                        Start Exploring
                                        <ArrowForward className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Cart Items */}
                    <div className="lg:col-span-2 flex-1 space-y-8">
                        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
                            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Your Archive <span className="text-amber-500">Selection</span></h1>
                                <span className="bg-gray-100 px-4 py-1.5 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">{cart.length} Items</span>
                            </div>

                            <div className="divide-y divide-gray-50">
                                {cart.map((item) => (
                                    <div key={item.id} className="p-8 flex items-center gap-8 group">
                                        {/* Image */}
                                        <Link to={`/product/${item.id}`} className="w-32 h-32 rounded-3xl overflow-hidden border border-gray-100 flex-shrink-0 relative group">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                                        </Link>

                                        {/* Details */}
                                        <div className="flex-1 space-y-2">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">{item.category}</span>
                                                    <h3 className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors uppercase tracking-tight line-clamp-1">{item.name}</h3>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors hover:bg-red-50 rounded-xl"
                                                >
                                                    <DeleteOutline />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between pt-4">
                                                <div className="flex items-center bg-gray-50 rounded-2xl border border-gray-100 p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-amber-600 "
                                                    >
                                                        <Remove fontSize="small" />
                                                    </button>
                                                    <span className="w-10 text-center font-bold text-gray-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-amber-600"
                                                    >
                                                        <Add fontSize="small" />
                                                    </button>
                                                </div>
                                                <p className="text-xl font-black text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Free Shipping Progress (Mock) */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4">
                            <div className="flex justify-between items-center text-sm font-bold">
                                <span className="text-gray-500 uppercase tracking-widest">Free Shipping Status</span>
                                <span className="text-amber-600">₹{Math.max(0, 5000 - subtotal).toLocaleString()} more to unlock</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-amber-400 transition-all duration-1000 ease-out"
                                    style={{ width: `${Math.min(100, (subtotal / 5000) * 100)}%` }}
                                ></div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium italic">
                                <LocalShipping fontSize="inherit" className="text-amber-400" />
                                Orders above <span className="text-gray-600 font-bold">₹5,000</span> qualify for free express shipping.
                            </div>
                        </div>
                    </div>

                    {/* Right: Summary */}
                    <div className="lg:w-[400px] space-y-8">
                        <div className="bg-gray-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShoppingBag className="w-32 h-32 rotate-12" />
                            </div>

                            <div className="relative z-10 space-y-8">
                                <h2 className="text-2xl font-black tracking-tight mb-8">Investment <span className="text-amber-400">Summary</span></h2>

                                <div className="space-y-4 border-b border-white/10 pb-8">
                                    <div className="flex justify-between items-center text-sm uppercase tracking-widest font-bold">
                                        <span className="text-white/40">Archive Value</span>
                                        <span>₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm uppercase tracking-widest font-bold">
                                        <span className="text-white/40">Logistics</span>
                                        <span>{shipping === 0 ? 'Complimentary' : `₹${shipping}`}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm uppercase tracking-widest font-bold">
                                        <span className="text-white/40">Tax (18% GST)</span>
                                        <span>₹{Math.round(tax).toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pb-10">
                                    <span className="text-sm font-black uppercase tracking-widest">Total Amount</span>
                                    <span className="text-3xl font-black text-amber-400">₹{Math.round(total).toLocaleString()}</span>
                                </div>

                                <button className="group w-full py-5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-black rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 active:scale-95">
                                    Finalise Checkout
                                    <ArrowForward className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>

                                <div className="space-y-4 pt-6">
                                    <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                                        <VerifiedUser sx={{ fontSize: 16 }} className="text-amber-400" /> Secure Encryption Active
                                    </div>
                                    <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                                        <Loop sx={{ fontSize: 16 }} className="text-amber-400" /> 30-Day Aesthetic Return
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back Link */}
                        <Link to="/products" className="block text-center text-gray-400 hover:text-gray-900 transition-colors font-bold uppercase tracking-[0.2em] text-[10px]">
                            &larr; Return to Collections
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
