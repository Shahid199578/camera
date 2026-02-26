import { useState } from 'react';
import { Settings2, Grid, List, LayoutGrid, Layout } from 'lucide-react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

import productsData from '../data/products.json';
import categoryNames from '../data/categories.json';

interface Product {
    id: string;
    title: string;
    price: string;
    image: string;
    description: string;
    specifications?: { label: string; value: string; }[];
    imageSettings?: string[];
}

interface ProductGridProps {
    onProductClick: (product: Product) => void;
    categoryId?: string;
}

export default function ProductGrid({ onProductClick, categoryId = 'cctv' }: ProductGridProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const safeCategoryId = categoryId as keyof typeof productsData;
    // We cast this to ensure TS knows it's an array of products, skipping the 'categories' key
    const products: Product[] = (productsData[safeCategoryId] as Product[]) || productsData['cctv'];

    // @ts-ignore - indexing into the JSON categories object
    const title = (categoryNames as Record<string, string>)[categoryId] || 'Camera';

    return (
        <section className="py-12 bg-white">
            {/* Filter Sidebar Component */}
            <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-xl font-bold text-red-600 mb-8 tracking-tight px-2">{title}</h2>

                {/* Updated Toolbar to Match Screenshot */}
                <div className="flex justify-between items-center bg-white py-4 mb-16 border-b border-gray-100 px-4">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center space-x-2 text-[12px] font-bold uppercase tracking-tight text-gray-900 group"
                    >
                        <Settings2 className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                        <span>SHOW FILTER ({products.length})</span>
                    </button>

                    <div className="hidden md:block text-[12px] font-medium text-gray-500">
                        Showing {products.length} products
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <span className="text-[12px] font-bold text-red-600">Sort:</span>
                            <select className="text-[12px] font-bold text-gray-900 bg-transparent outline-none cursor-pointer border-none focus:ring-0">
                                <option>Price, high to low</option>
                                <option>Price, low to high</option>
                                <option>Alphabetically, A-Z</option>
                            </select>
                        </div>

                        <div className="hidden md:flex items-center space-x-3 text-gray-300">
                            <Grid className="w-4 h-4 text-gray-900" />
                            <LayoutGrid className="w-4 h-4 text-gray-300" />
                            <Layout className="w-4 h-4 text-gray-300" />
                            <List className="w-4 h-4 text-gray-300" />
                        </div>
                    </div>
                </div>

                {/* Grid - 3 products per row exactly as requested */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {products.map((product, index) => (
                        <div key={index} className="px-2">
                            <ProductCard
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                onClick={() => onProductClick(product)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
