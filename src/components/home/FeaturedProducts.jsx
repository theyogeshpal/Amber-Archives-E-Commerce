import { Link } from 'react-router-dom';
import { productsData } from '../../data/products';

const FeaturedProducts = () => {
    // Take the first 4 products as featured
    const featuredList = productsData.slice(0, 4);

    return (
        <section className="py-20 bg-gray-50 uppercase tracking-tight">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tighter">Featured <span className="text-yellow-500">Collections</span></h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">Check out our top-rated products that everyone is talking about.</p>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredList.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-[2rem] shadow-sm overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 group border border-gray-100 flex flex-col h-full">
                            <div className="h-72 overflow-hidden relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                                {product.isNew && (
                                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        New
                                    </div>
                                )}
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <span className="text-[10px] text-yellow-600 font-bold uppercase tracking-[0.2em] mb-3 block">{product.category}</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-yellow-500 transition-colors">{product.name}</h3>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                                    <div className="p-3 bg-gray-900 text-white rounded-2xl group-hover:bg-yellow-400 group-hover:text-gray-900 transition-all duration-300 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/products" className="inline-block px-10 py-4 bg-white border-2 border-gray-900 text-gray-900 font-black rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-xl shadow-gray-100">
                        Explore Full Archive
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
