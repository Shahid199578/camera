import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

interface Product {
    id?: string;
    title: string;
    price: string;
    image: string;
    description?: string;
    specifications?: { label: string; value: string; }[];
    imageSettings?: string[];
}

interface RelatedProductsProps {
    onProductClick?: (product: Product) => void;
}

export default function RelatedProducts({ onProductClick }: RelatedProductsProps) {
    const [randomProducts, setRandomProducts] = useState<Product[]>([]);

    const scrambleProducts = () => {
        const allProducts = Object.values(productsData).flat() as Product[];
        const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
    };

    useEffect(() => {
        scrambleProducts();
    }, []);

    return (
        <section className="py-24 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">You May Also Like</h2>
                        <div className="h-1 w-12 bg-red-600" />
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={scrambleProducts} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all text-gray-400 group">
                            <ChevronLeft className="w-5 h-5 group-hover:block" />
                        </button>
                        <button onClick={scrambleProducts} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all text-gray-400 group">
                            <ChevronRight className="w-5 h-5 group-hover:block" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {randomProducts.map((product, i) => (
                        <ProductCard
                            key={product.id || i}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            badge={i === 0 ? "Trending" : undefined}
                            onClick={() => onProductClick && onProductClick(product)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
