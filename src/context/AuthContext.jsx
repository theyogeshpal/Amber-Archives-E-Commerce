import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('amber_isLoggedIn') === 'true';
    });

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('amber_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem('amber_isLoggedIn', isLoggedIn);
        if (user) {
            localStorage.setItem('amber_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('amber_user');
        }
    }, [isLoggedIn, user]);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData || { name: 'Yogesh Pal', email: 'yogesh.pal@amberarchives.com' });
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
