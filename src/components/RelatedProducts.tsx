import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const relatedProducts = [
    { title: 'Intex IP Bullet 5MP Pro CCTV Camera', price: '₹ 11,000.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex IP 5MP Dome Pro CCTV Camera', price: '₹ 10,500.00', image: '/assets/dome_camera.png' },
    { title: 'Intex IP Bullet 5MP CCTV Camera', price: '₹ 9,500.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex IP 5MP Dome CCTV Camera', price: '₹ 9,000.00', image: '/assets/dome_camera.png' },
];

export default function RelatedProducts() {
    return (
        <section className="py-24 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">You May Also Like</h2>
                        <div className="h-1 w-12 bg-red-600" />
                    </div>
                    <div className="flex space-x-2">
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-intex-blue hover:border-intex-blue hover:text-white transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-intex-blue hover:border-intex-blue hover:text-white transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map((product, i) => (
                        <ProductCard
                            key={i}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            badge={i === 0 ? "Bestseller" : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
