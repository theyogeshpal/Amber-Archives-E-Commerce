import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const Products = () => {
    const productsData = [
        { id: 1, name: 'Premium Wireless Headphones', category: 'Electronics', price: 299, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', isNew: true },
        { id: 2, name: 'Minimalist Smart Watch', category: 'Gadgets', price: 199, rating: 4.5, reviews: 89, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', isNew: false },
        { id: 3, name: 'Performance Running Shoes', category: 'Fashion', price: 120, rating: 4.7, reviews: 256, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', isNew: true },
        { id: 4, name: 'Urban Explorer Backpack', category: 'Accessories', price: 85, rating: 4.6, reviews: 45, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', isNew: false },
        { id: 5, name: 'Professional DSLR Camera', category: 'Electronics', price: 899, rating: 4.9, reviews: 67, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80', isNew: false },
        { id: 6, name: 'Leather Weekend Bag', category: 'Accessories', price: 150, rating: 4.4, reviews: 34, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80', isNew: true },
        { id: 7, name: 'Cotton Summer Shirt', category: 'Fashion', price: 45, rating: 4.2, reviews: 112, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', isNew: false },
        { id: 8, name: 'Portable Bluetooth Speaker', category: 'Electronics', price: 79, rating: 4.6, reviews: 198, image: 'https://cdn.moglix.com/p/ETDC0l8QWI1e7-xxlarge.jpg', isNew: true },
        { id: 9, name: 'Designer Sunglasses', category: 'Accessories', price: 135, rating: 4.5, reviews: 56, image: 'https://u-mercari-images.mercdn.net/photos/m85257037986_1.jpg', isNew: false },
        { id: 10, name: 'Organic Face Cream', category: 'Beauty', price: 35, rating: 4.8, reviews: 87, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80', isNew: true },
        { id: 11, name: 'Modern Desk Lamp', category: 'Home', price: 65, rating: 4.3, reviews: 29, image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80', isNew: false },
        { id: 12, name: 'Yoga Mat Premium', category: 'Sports', price: 55, rating: 4.7, reviews: 143, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80', isNew: false },
    ];

    const [products, setProducts] = useState(productsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Featured');
    const [priceRange, setPriceRange] = useState(1000);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [wishlist, setWishlist] = useState([]);

    const categories = ['All', ...new Set(productsData.map(p => p.category))];

    useEffect(() => {
        let filtered = productsData.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'All' || product.category === category;
            const matchesPrice = product.price <= priceRange;
            return matchesSearch && matchesCategory && matchesPrice;
        });

        if (sortBy === 'Price: Low to High') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'Rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        setProducts(filtered);
    }, [searchTerm, category, sortBy, priceRange]);

    const toggleWishlist = (id) => {
        setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-100 py-12 md:py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
                        Amber <span className="text-yellow-500">Archives</span> Collections
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
                        Explore our curated selection of premium products, where quality meets timeless elegance.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar - Desktop */}
                    <div className="hidden lg:block w-72 flex-shrink-0">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <FilterListIcon /> Filters
                            </h3>

                            {/* Category Filter */}
                            <div className="mb-8">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">Category</label>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setCategory(cat)}
                                            className={`block w-full text-left px-4 py-2 rounded-xl transition-all duration-200 ${category === cat ? 'bg-yellow-400 text-gray-900 font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-8">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">Max Price: ${priceRange}</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="10"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>$0</span>
                                    <span>$1000+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Top Controls */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="relative flex-1 group">
                                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search your collection..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all text-gray-700"
                                />
                            </div>
                            <div className="flex gap-4">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-gray-700 font-medium cursor-pointer"
                                >
                                    <option>Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Rating</option>
                                </select>
                                <button
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                    className="lg:hidden p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:text-yellow-500"
                                >
                                    <FilterListIcon />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Filter Expandable */}
                        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isSidebarOpen ? 'max-h-screen mb-8' : 'max-h-0'}`}>
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="mb-6">
                                    <label className="text-xs font-bold text-gray-400 uppercase mb-3 block">Categories</label>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setCategory(cat)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === cat ? 'bg-yellow-400 text-gray-900' : 'bg-gray-100 text-gray-600'}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase mb-3 block">Max Price: ${priceRange}</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        step="10"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                            {products.map(product => (
                                <div key={product.id} className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative flex flex-col h-full transform hover:-translate-y-2">
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                        {product.isNew && (
                                            <span className="bg-yellow-400 text-gray-900 text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">New</span>
                                        )}
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">{product.category}</span>
                                    </div>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className="absolute top-4 right-4 z-10 p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm text-gray-400 hover:text-red-500 transition-all active:scale-90"
                                    >
                                        {wishlist.includes(product.id) ? <FavoriteIcon className="text-red-500" /> : <FavoriteBorderIcon />}
                                    </button>

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Mobile Add to Cart Reveal */}
                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                                            <button className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:bg-yellow-300 active:scale-95 transition-all">
                                                <ShoppingCartIcon fontSize="small" /> Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-4 md:p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-1 mb-2">
                                            <div className="flex text-yellow-500">
                                                <StarIcon sx={{ fontSize: 16 }} />
                                            </div>
                                            <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                                            <span className="text-[10px] text-gray-400">({product.reviews})</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-2 leading-tight flex-1 line-clamp-2">{product.name}</h3>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-lg md:text-2xl font-black text-gray-900">${product.price}</span>

                                            {/* Mobile Cart Icon */}
                                            <button className="md:hidden p-2 bg-yellow-400 text-gray-900 rounded-xl shadow-md active:scale-90">
                                                <ShoppingCartIcon fontSize="small" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {products.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
                                <SearchIcon className="text-gray-200 mb-4" sx={{ fontSize: 64 }} />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
                                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                                <button
                                    onClick={() => { setCategory('All'); setSearchTerm(''); setPriceRange(1000); }}
                                    className="mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-all"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
