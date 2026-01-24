import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Amber Archives</h3>
                        <p className="text-gray-600 mb-4">Your premium online store for curated collections and timeless pieces.</p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-yellow-500 transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                <FacebookIcon fontSize="small" />
                            </div>
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-yellow-500 transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                <TwitterIcon fontSize="small" />
                            </div>
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-yellow-500 transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                <InstagramIcon fontSize="small" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><Link to="/" className="hover:text-yellow-600 transition">Home</Link></li>
                            <li><Link to="/products" className="hover:text-yellow-600 transition">Shop</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-600 transition">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-yellow-600 transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Customer Care</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><Link to="/faq" className="hover:text-yellow-600 transition">FAQ</Link></li>
                            <li><Link to="/shipping" className="hover:text-yellow-600 transition">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="hover:text-yellow-600 transition">Returns & Refunds</Link></li>
                            <li><Link to="/privacy" className="hover:text-yellow-600 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>123 Amber St, Heritage City</li>
                            <li>support@amberarchives.com</li>
                            <li>+1 234 567 890</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Amber Archives. All rights reserved.</p>
                    <p className="flex items-center justify-center gap-1 font-medium text-gray-600">
                        Created with <FavoriteIcon className="text-red-500 w-4 h-4" /> by Yogesh Pal
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
