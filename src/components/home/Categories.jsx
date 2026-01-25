import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Electronics', image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg', color: 'bg-blue-100' },
        { id: 2, name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', color: 'bg-pink-100' },
        { id: 3, name: 'Home', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', color: 'bg-green-100' },
        { id: 4, name: 'Beauty', image: 'https://img.freepik.com/free-photo/overhead-view-cosmetics-makeup-natural-organic-products-dual-backdrop_23-2148031301.jpg?semt=ais_hybrid&w=740&q=80', color: 'bg-purple-100' },
        { id: 5, name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', color: 'bg-orange-100' },
        { id: 6, name: 'Accessories', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80', color: 'bg-yellow-100' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tighter uppercase">Shop by <span className="text-yellow-500">Category</span></h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-lg uppercase">Indulge in our carefully curated selections across various lifestyle departments.</p>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat) => (
                        <Link to="/products" state={{ selectedCategory: cat.name }} key={cat.id} className="group cursor-pointer">
                            <div className={`rounded-xl overflow-hidden aspect-square mb-4 shadow-md group-hover:shadow-xl transition duration-300 transform group-hover:scale-105 border-2 border-transparent group-hover:border-yellow-400`}>
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-semibold text-gray-800 text-center text-lg">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
