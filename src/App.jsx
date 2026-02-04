import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <div className="pt-16 lg:pt-18 pb-24 md:pt-17 sm:pt-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default App;