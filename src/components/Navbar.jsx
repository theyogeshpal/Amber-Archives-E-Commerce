import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = ({ className = "" }) => {
    const { isLoggedIn, user } = useAuth();
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const defaultAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80';
    const profilePic = user?.avatar || defaultAvatar;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },

        ...(isLoggedIn ? [{ name: 'Profile', path: '/profile' }] : []),
    ];

    const bottomLinks = [
        { name: 'Home', path: '/', icon: <HomeIcon /> },
        { name: 'Shop', path: '/products', icon: <StorefrontIcon /> },
        { name: 'Cart', path: '/cart', icon: <ShoppingCartIcon /> },
        ...(isLoggedIn
            ? [{
                name: 'Profile',
                path: '/profile',
                icon: (
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-yellow-400 p-0.5">
                        <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                )
            }]
            : [{ name: 'Login', path: '/login', icon: <PersonIcon /> }]),
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm ${className}`}>
                <div className="container mx-auto px-4 h-[70px] flex justify-between items-center relative z-50 bg-white">
                    <div className="logo">
                        <Link to="/" className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                            Amber <span className="text-yellow-500">Archives</span>
                        </Link>
                    </div>

                    {/* Desktop Links - Hidden on Mobile/Tablet */}
                    <ul className="hidden lg:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `font-bold transition-all duration-300 relative group ${isActive ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {/* Premium Active Indicator */}
                                            <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-4'}`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-4">
                        {/* Cart - Desktop Only */}
                        <Link to="/cart" className="hidden lg:flex text-gray-700 hover:text-yellow-500 transition duration-300 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cart.length}</span>
                        </Link>

                        {!isLoggedIn && (
                            <div className="hidden lg:flex space-x-2">
                                <Link to="/login" className="px-5 py-2 text-gray-900 font-semibold hover:text-yellow-600 transition duration-300">Login</Link>
                                <Link to="/register" className="px-5 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md hover:shadow-lg">Start free</Link>
                            </div>
                        )}

                        {isLoggedIn && (
                            <Link to="/profile" className="hidden lg:flex items-center gap-2 group">
                                <div className="w-10 h-10 rounded-full bg-yellow-400 p-0.5 flex items-center justify-center text-gray-900 font-bold border-2 border-transparent group-hover:border-yellow-400 transition-all overflow-hidden">
                                    <img src={profilePic} alt={user?.name || 'Profile'} className="w-full h-full object-cover rounded-full" />
                                </div>
                            </Link>
                        )}

                        {/* Mobile Menu Toggle - Prominent Button Design */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 text-gray-900 hover:bg-gray-100 active:scale-95 transition-all border border-gray-100"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <CloseIcon sx={{ fontSize: 24 }} /> : <MenuIcon sx={{ fontSize: 24 }} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Overlay - Solid Background */}
                <div className={`lg:hidden fixed inset-0 top-[70px] bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                    <div className="container mx-auto px-6 py-8 flex flex-col h-full bg-white">
                        <ul className="space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-2xl font-bold transition-all duration-300 flex items-center justify-between ${isActive ? 'text-yellow-500' : 'text-gray-700'
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {link.name}
                                                <span className={`w-2 h-2 rounded-full bg-yellow-400 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pb-24 space-y-4">
                            {!isLoggedIn ? (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-center py-4 text-gray-900 font-bold text-xl border-2 border-gray-100 rounded-2xl"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-center py-4 bg-yellow-400 text-gray-900 font-bold text-xl rounded-2xl shadow-lg shadow-yellow-200"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    to="/profile"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                                >
                                    <div className="w-12 h-12 rounded-full bg-yellow-400 p-0.5">
                                        <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{user?.name || 'User'}</p>
                                        <p className="text-sm text-gray-500">View Profile</p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
