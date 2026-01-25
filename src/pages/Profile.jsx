import { useNavigate, Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { productsData } from '../data/products';
import {
    Person,
    Favorite,
    ShoppingBag,
    Star,
    Settings,
    Logout,
    EmojiEvents,
    History,
    DeleteOutline,
    ArrowForward
} from '@mui/icons-material';

const Profile = () => {
    const navigate = useNavigate();
    const { wishlist, toggleWishlist } = useWishlist();
    const { user: authUser, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Get wishlisted products
    const wishlistedProducts = productsData.filter(p => Array.isArray(wishlist) && wishlist.includes(p.id));

    const user = {
        name: authUser?.name || 'Yogesh Pal',
        email: authUser?.email || 'yogesh.pal@amberarchives.com',
        memberSince: 'January 2024',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        stats: [
            { label: 'Orders', value: '12', icon: <ShoppingBag className="text-blue-500" /> },
            { label: 'Wishlist', value: wishlist.length.toString(), icon: <Favorite className="text-pink-500" /> },
            { label: 'Reviews', value: '5', icon: <Star className="text-yellow-500" /> }
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Profile Header */}
            <div className="bg-white border-b border-gray-100 pt-12 pb-20 md:pt-20 md:pb-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="relative group">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full scale-110"></div>
                            <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white p-3 rounded-2xl shadow-xl z-20 hover:scale-110 transition-transform cursor-pointer">
                                <Settings sx={{ fontSize: 24 }} />
                            </div>
                        </div>

                        <div className="text-center md:text-left space-y-4">
                            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/10 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-widest leading-none">
                                <EmojiEvents sx={{ fontSize: 16 }} /> Premium Voyager
                            </div> */}
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">{user.name}</h1>
                            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-500 font-medium">
                                <p>{user.email}</p>
                                <span className="hidden sm:inline-block w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                                <p>Member since {user.memberSince}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-16 relative z-10">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Stats Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white border-opacity-50 shadow-xl space-y-8">
                            {user.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
                                            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full py-5 bg-white border border-red-50 text-red-500 font-black rounded-3xl hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm active:scale-95"
                        >
                            <Logout />
                            Logout Session
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-12">
                        {/* Wishlist Section */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between md:flex-row flex-col">
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                                    <Favorite className="text-pink-500" /> My Archive Wishlist
                                </h2>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{wishlistedProducts.length} Items</p>
                            </div>

                            {wishlistedProducts.length > 0 ? (
                                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {wishlistedProducts.map((product) => (
                                        <div key={product.id} className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden relative">
                                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <button
                                                    onClick={() => toggleWishlist(product.id)}
                                                    className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg text-red-500 hover:text-gray-400 transition-all active:scale-90 z-20"
                                                >
                                                    <DeleteOutline />
                                                </button>
                                            </div>
                                            <div className="px-2 pb-2 flex flex-col flex-1">
                                                <h3 className="font-bold text-gray-900 mb-2 truncate group-hover:text-yellow-500 transition-colors uppercase tracking-tight">{product.name}</h3>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-xl font-black text-gray-900">₹{product.price}</span>
                                                    <Link to={`/product/${product.id}`} className="p-3 bg-gray-50 rounded-xl hover:bg-yellow-400 transition-all">
                                                        <ArrowForward sx={{ fontSize: 20 }} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white border-2 border-dashed border-gray-200 rounded-[3rem] py-24 text-center">
                                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Favorite className="text-gray-200" sx={{ fontSize: 40 }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is silent</h3>
                                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">Discover extraordinary pieces and curate your personal archives today.</p>
                                    <Link to="/products" className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-yellow-500 transition-all shadow-xl shadow-gray-200">
                                        Explore Archive
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Recent Activity / Orders (Mock) */}
                        <div className="space-y-8 pb-10">
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                                <History className="text-blue-500" /> Recent Journey
                            </h2>
                            <div className="bg-white rounded-[2.5rem] border border-gray-100 divide-y divide-gray-50 overflow-hidden shadow-sm">
                                {[1, 2, 3].map((order) => (
                                    <div key={order} className="p-8 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center font-black text-gray-400 group-hover:bg-white group-hover:text-yellow-500 transition-all">
                                                #{9283 + order}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 mb-1 leading-tight">Order in Transit &bull; Expected Monday</p>
                                                <p className="text-sm text-gray-400 font-medium">3 Items &bull; Total Value ₹{2499 + (order * 520)}</p>
                                            </div>
                                        </div>
                                        <ArrowForward className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-2 transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
