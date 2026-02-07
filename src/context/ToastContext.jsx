import React, { createContext, useState, useContext, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        show: false,
        message: '',
        title: 'Added to Archive'
    });

    const showNotification = useCallback((message, title = 'Added to Archive') => {
        setToast({ show: true, message, title });
        setTimeout(() => {
            setToast(prev => ({ ...prev, show: false }));
        }, 3000);
    }, []);

    const hideNotification = useCallback(() => {
        setToast(prev => ({ ...prev, show: false }));
    }, []);

    return (
        <ToastContext.Provider value={{ toast, showNotification, hideNotification }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
