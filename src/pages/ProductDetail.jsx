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

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState('');

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
                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100 group relative max-h-[510px] mx-auto lg:mx-0">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                                    <img src={img} alt="" className="w-full h-full object-cover" />
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
                                        <StarIcon key={i} sx={{ fontSize: 20 }} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'} />
                                    ))}
                                </div>
                                <span className="text-gray-900 font-bold">{product.rating}</span>
                                <span className="text-gray-400 font-medium">({product.reviews} customer reviews)</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">{product.name}</h1>
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
                                    onClick={() => addToCart(product, quantity)}
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

                            <div className="flex items-center gap-4 py-6 border-t border-gray-100">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Categories:</span>
                                <span className="px-4 py-1.5 bg-yellow-400/10 text-yellow-600 rounded-full text-xs font-bold uppercase">{product.category}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section (Tabs Simulated) */}
                <div className="mt-12 pt-10 border-t border-gray-100">
                    <div className="flex gap-12 mb-12 border-b border-gray-100">
                        <button className="pb-4 border-b-2 border-yellow-500 font-bold text-gray-900">Description</button>
                        <button className="pb-4 text-gray-400 font-medium hover:text-gray-600 transition-colors">Specifications</button>
                        <button className="pb-4 text-gray-400 font-medium hover:text-gray-600 transition-colors">Reviews ({product.reviews})</button>
                    </div>

                    <div className="prose prose-lg max-w-4xl text-gray-600 leading-relaxed">
                        <p>
                            Experience the pinnacle of craftsmanship with the {product.name}. Every element of this product has been meticulously designed and tested to meet our rigorous standards of quality and aesthetics.
                        </p>
                        <ul className="mt-6 space-y-2">
                            <li>Hand-selected premium materials for longevity and premium feel</li>
                            <li>Ergonomic design tailored for maximum user comfort</li>
                            <li>Sustainably sourced and ethically manufactured components</li>
                            <li>Integrated smart features designed for modern living</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
