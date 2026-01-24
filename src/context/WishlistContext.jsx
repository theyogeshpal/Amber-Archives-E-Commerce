import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const [wishlist, setWishlist] = useState(() => {
        try {
            const saved = localStorage.getItem('amber_wishlist');
            if (saved === null || saved === 'undefined') return [];
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            console.error("Error parsing wishlist from localStorage:", e);
            return [];
        }
    });

    // Clear wishlist on logout
    useEffect(() => {
        if (!isLoggedIn) {
            setWishlist([]);
            localStorage.removeItem('amber_wishlist');
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.setItem('amber_wishlist', JSON.stringify(wishlist));
        }
    }, [wishlist, isLoggedIn]);

    const toggleWishlist = (productId) => {
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const isInWishlist = (productId) => wishlist.includes(productId);

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
