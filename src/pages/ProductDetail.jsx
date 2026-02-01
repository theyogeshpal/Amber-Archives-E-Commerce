import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AuthPopup from '../components/AuthPopup';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleWishlist: globalToggleWishlist, isInWishlist } = useWishlist();
    const { addToCart: globalAddToCart } = useCart();
    const { isLoggedIn } = useAuth();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState('');
    const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
    const [authPopupMessage, setAuthPopupMessage] = useState('');
    const [activeTab, setActiveTab] = useState('Description');

    const toggleWishlist = (productId) => {
        if (!isLoggedIn) {
            setAuthPopupMessage("Please login to add this timeless piece to your collection wishlist.");
            setIsAuthPopupOpen(true);
            return;
        }
        globalToggleWishlist(productId);
    };

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            setAuthPopupMessage("Authentic access required to add this item to your cart archive.");
            setIsAuthPopupOpen(true);
            return;
        }
        globalAddToCart(product, quantity);
    };

    useEffect(() => {
        const foundProduct = productsData.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.image);
        } else {
            navigate('/products');
        }
    }, [id, navigate]);

    if (!product) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen pt-10 pb-12">
            <div className="container mx-auto px-6">
                {/* Breadcrumbs / Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-yellow-500 transition-colors mb-8 group"
                >
                    <ArrowBackIcon fontSize="small" className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Shop</span>
                </button>

                <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-start">
                    {/* Left: Image Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden bg-white border border-gray-100 group relative max-h-[510px] mx-auto lg:mx-0 p-8">
                            <img
                                src={selectedImage}
                                alt={product.title || product.name}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            {product.isNew && (
                                <span className="absolute top-6 left-6 bg-yellow-400 text-gray-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">New Arrival</span>
                            )}
                        </div>

                        {/* Thumbnail Grid (Simulated) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[product.image, product.image, product.image, product.image].map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === img && idx === 0 ? 'border-yellow-400 shadow-md' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-contain p-2" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="lg:col-span-7 flex flex-col pt-4">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-yellow-500 mb-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} sx={{ fontSize: 20 }} className={i < Math.floor(product.rating?.rate || product.rating) ? 'text-yellow-400' : 'text-gray-200'} />
                                    ))}
                                </div>
                                <span className="text-gray-900 font-bold">{product.rating?.rate || product.rating}</span>
                                <span className="text-gray-400 font-medium">({product.rating?.count || product.reviews} customer reviews)</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">{product.title || product.name}</h1>
                            <p className="text-3xl font-bold text-yellow-500 mb-6">₹{product.price}</p>

                            <div className="h-px bg-gray-100 w-full mb-6"></div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.description || "Discover the perfect addition to your collection. This premium piece from Amber Archives combines exceptional quality with timeless design, ensuring you look and feel your best."}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <LocalShippingIcon className="text-yellow-500" />
                                    <span className="font-medium">Free express delivery on orders over ₹2000</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <VerifiedUserIcon className="text-yellow-500" />
                                    <span className="font-medium">2-Year extended warranty included</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <LoopIcon className="text-yellow-500" />
                                    <span className="font-medium">30-day effortless returns policy</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto space-y-6">
                            <div className="flex flex-wrap gap-4 items-center">
                                <div className="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center text-xl font-bold text-gray-600 hover:text-yellow-500 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center text-xl font-bold text-gray-600 hover:text-yellow-500 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-gray-900 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-200"
                                >
                                    <ShoppingCartIcon />
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className={`p-4 rounded-2xl border transition-all active:scale-90 ${isInWishlist(product.id) ? 'bg-pink-50 border-pink-100 text-pink-500' : 'bg-white border-gray-100 text-gray-400 hover:text-pink-500'}`}
                                >
                                    {isInWishlist(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </button>
                            </div>

                            <AuthPopup
                                isOpen={isAuthPopupOpen}
                                onClose={() => setIsAuthPopupOpen(false)}
                                message={authPopupMessage}
                            />

                            <div className="flex items-center gap-4 py-6 border-t border-gray-100">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Categories:</span>
                                <span className="px-4 py-1.5 bg-yellow-400/10 text-yellow-600 rounded-full text-xs font-bold uppercase">{product.category}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section (Functional Tabs) */}
                <div className="mt-12 pt-10 border-t border-gray-100">
                    <div className="flex gap-8 md:gap-12 mb-12 border-b border-gray-100 overflow-x-auto no-scrollbar">
                        {['Description', 'Specifications', 'Reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 font-bold transition-all min-w-max relative ${activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {tab} {tab === 'Reviews' && `(${product.rating?.count || product.reviews || 0})`}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-full animate-fade-in"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="animate-fade-in">
                        {activeTab === 'Description' && (
                            <div className="prose prose-lg max-w-4xl text-gray-600 leading-relaxed">
                                <p>
                                    Experience the pinnacle of craftsmanship with the {product.title || product.name}. Every element of this product has been meticulously designed and tested to meet our rigorous standards of quality and aesthetics.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5"></div>
                                        <span>Hand-selected premium materials for longevity and premium feel</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5"></div>
                                        <span>Ergonomic design tailored for maximum user comfort</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5"></div>
                                        <span>Sustainably sourced and ethically manufactured components</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5"></div>
                                        <span>Integrated smart features designed for modern living</span>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'Specifications' && (
                            <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: "Material", value: "Premium Composite" },
                                    { label: "Weight", value: "450g" },
                                    { label: "Dimensions", value: "24 x 18 x 8 cm" },
                                    { label: "Origin", value: "Artisan Workshop" },
                                    { label: "Model", value: `AA-${product.id}00` },
                                    { label: "Warranty", value: "24 Months" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{spec.label}</span>
                                        <span className="text-gray-900 font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'Reviews' && (
                            <div className="space-y-8 max-w-3xl">
                                {[
                                    { user: "Aryan S.", date: "Jan 12, 2026", rating: 5, comment: "Absolutely stunning quality. The attention to detail in the packaging alone was impressive!" },
                                    { user: "Priya R.", date: "Feb 01, 2026", rating: 4, comment: "Beautiful design, though the color is slightly darker than in the photos. Still love it!" }
                                ].map((review, i) => (
                                    <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="font-black text-gray-900">{review.user}</h4>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.date}</p>
                                            </div>
                                            <div className="flex text-yellow-400">
                                                {[...Array(review.rating)].map((_, j) => <StarIcon key={j} fontSize="small" />)}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed italic">"{review.comment}"</p>
                                    </div>
                                ))}
                                <button className="px-8 py-3 bg-gray-900 text-white font-black rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all active:scale-95 shadow-lg">
                                    Write a Review
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
