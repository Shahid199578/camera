import { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductSpecifications from './ProductSpecifications';
import RelatedProducts from './RelatedProducts';

export default function ProductDetail() {
    const [activeTab, setActiveTab] = useState('OVERVIEW');

    return (
        <div className="bg-white">

            {/* Main Detail Grid */}
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 pb-24 border-b border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <ProductGallery />
                    <ProductInfo />
                </div>
            </div>

            {/* Sticky Tabs - Centered as per user request */}
            <div className="sticky top-[80px] z-40 bg-black text-white">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
                    <div className="flex justify-center space-x-12">
                        {['OVERVIEW', 'SPECIFICATIONS'].map((tab) => (
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
                                src="/assets/dome_camera.png"
                                alt="Overview Camera"
                                className="w-full max-w-sm object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-gray-800 leading-[1.8] text-base font-medium lg:text-left text-center">
                                This high-resolution security camera features a 1/3" 5.0 Mega Pixel CMOS sensor with a 5 Mega Pixel (3.6mm) lens, providing crystal-clear images at a resolution of 2592(H) × 1920(V). It delivers excellent low-light performance with a minimum illumination of 0.01Lux (F1.2, IR ON) and offers IR coverage up to 20 meters using 12 LEDs. Additional features include 2D noise reduction, lightning protection, and anti-fog functionality for reliable operation in diverse conditions. The camera's plastic body is durable, and it supports multiple angle adjustments for optimal coverage.
                            </p>
                        </div>
                    </div>
                ) : (
                    <ProductSpecifications />
                )}
            </div>

            {/* Related Products Section */}
            <RelatedProducts />
        </div>
    );
}
