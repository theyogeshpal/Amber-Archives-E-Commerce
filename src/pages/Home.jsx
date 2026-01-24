import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <Categories />
            <FeaturedProducts />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;
