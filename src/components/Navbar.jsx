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

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        ...(isLoggedIn ? [{ name: 'Profile', path: '/profile', icon: <PersonIcon /> }] : [{ name: 'Login', path: '/login', icon: <PersonIcon /> }]),
    ];

    return (
        <>
            <nav className="bg-white/70 md:bg-white/80 backdrop-blur-md shadow-sm p-4 sticky top-0 z-50 border-b border-gray-100">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="logo">
                        <Link to="/" className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                            Amber <span className="text-yellow-500">Archives</span>
                        </Link>
                    </div>

                    {/* Desktop Links - Hidden on Mobile */}
                    <ul className="hidden md:flex space-x-8 items-center">
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
                        {/* Cart - Desktop Only (since it's in bottom bar for mobile) */}
                        <Link to="/cart" className="hidden md:flex text-gray-700 hover:text-yellow-500 transition duration-300 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cart.length}</span>
                        </Link>

                        {!isLoggedIn && (
                            <div className="hidden md:flex space-x-2">
                                <Link to="/login" className="px-5 py-2 text-gray-900 font-semibold hover:text-yellow-600 transition duration-300">Login</Link>
                                <Link to="/register" className="px-5 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md hover:shadow-lg">Start free</Link>
                            </div>
                        )}

                        {isLoggedIn && (
                            <Link to="/profile" className="hidden md:flex items-center gap-2 group">
                                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold border-2 border-transparent group-hover:border-yellow-400 transition-all">
                                    <PersonIcon />
                                </div>
                            </Link>
                        )}

                        {/* Mobile Profile Icon instead of Menu */}
                        <Link to={isLoggedIn ? "/profile" : "/login"} className="md:hidden text-gray-700 hover:text-yellow-500">
                            <PersonIcon />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* iPhone Style Bottom Navigation Bar */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/70 backdrop-blur-2xl border border-gray-200/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-[32px] z-50 py-3 px-6">
                <ul className="flex justify-between items-center px-2">
                    {bottomLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-yellow-500 scale-110' : 'text-gray-400 hover:text-gray-600'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span>
                                            {React.cloneElement(link.icon, { sx: { fontSize: 28 } })}
                                        </span>
                                        <span className={`text-[10px] font-semibold tracking-wide ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                                            {link.name}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
