import { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductSpecifications from './ProductSpecifications';
import RelatedProducts from './RelatedProducts';

interface ProductDetailProps {
    product?: {
        id?: string;
        title: string;
        price: string;
        image: string;
        description?: string;
        specifications?: any[];
    } | null;
    onProductClick?: (product: any) => void;
}

export default function ProductDetail({ product, onProductClick }: ProductDetailProps) {
    const [activeTab, setActiveTab] = useState('OVERVIEW');

    // Extract directly from payload
    const displayImage = product?.image || "";
    const displayTitle = product?.title || "";
    const displayPrice = product?.price || "";
    const displayDescription = product?.description || "";

    const hasSpecs = product?.specifications && product.specifications.length > 0;

    const tabs = ['OVERVIEW'];
    if (hasSpecs) tabs.push('SPECIFICATIONS');

    return (
        <div className="bg-white">

            {/* Main Detail Grid */}
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 pb-24 border-b border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <ProductGallery image={displayImage} />
                    <ProductInfo title={displayTitle} price={displayPrice} />
                </div>
            </div>

            {/* Sticky Tabs - Centered as per user request */}
            <div className="sticky top-[80px] z-40 bg-black text-white">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
                    <div className="flex justify-center space-x-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-6 text-xs font-black uppercase tracking-[0.2em] relative transition-colors ${activeTab === tab ? 'text-red-600' : 'text-white hover:text-red-500'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-6 left-0 right-0 h-0.5 bg-red-600" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="py-24 max-w-[1440px] mx-auto px-4 lg:px-12">
                {activeTab === 'OVERVIEW' ? (
                    <div className="flex flex-col lg:flex-row gap-16 items-center max-w-5xl mx-auto">
                        <div className="lg:w-1/2 flex justify-center">
                            <img
                                src={displayImage}
                                alt="Overview"
                                className="w-full max-w-sm object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-gray-800 leading-[1.8] text-base font-medium lg:text-left text-center">
                                {displayDescription}
                            </p>
                        </div>
                    </div>
                ) : (
                    <ProductSpecifications product={product} />
                )}
            </div>

            {/* Related Products Section */}
            <RelatedProducts onProductClick={onProductClick} />
        </div>
    );
}
