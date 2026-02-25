import { useState } from 'react';
import { Settings2, Grid, List, LayoutGrid, Layout } from 'lucide-react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

const cctvProducts = [
    { title: 'Intex IP Bullet 5MP Pro CCTV Camera', price: '₹ 11,000.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex IP 5MP Dome Pro CCTV Camera', price: '₹ 10,500.00', image: '/assets/dome_camera.png' },
    { title: 'Intex IP Bullet 5MP CCTV Camera', price: '₹ 9,500.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex IP 5MP Dome CCTV Camera', price: '₹ 9,000.00', image: '/assets/dome_camera.png' },
    { title: 'Intex IP 4MP Bullet CCTV Camera', price: '₹ 8,000.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex IP 4MP Dome CCTV Camera', price: '₹ 7,500.00', image: '/assets/dome_camera.png' },
    { title: 'Intex AHD BULLET 5MP CCTV Camera', price: '₹ 6,500.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex AHD Dome 5MP CCTV Camera', price: '₹ 6,000.00', image: '/assets/dome_camera.png' },
    { title: 'Intex AHD BULLET 2.4MP CCTV Camera', price: '₹ 4,500.00', image: '/assets/bullet_camera.png' },
    { title: 'Intex AHD Dome 2.4MP CCTV Camera', price: '₹ 4,000.00', image: '/assets/dome_camera.png' },
];

const nvrProducts = [
    { title: 'Intex 4 Channel NVR 4K', price: '₹ 8,500.00', image: '/assets/biometrics.png' },
    { title: 'Intex 8 Channel DVR HD', price: '₹ 12,000.00', image: '/assets/biometrics.png' },
    { title: 'Intex 16 Channel NVR Pro Series', price: '₹ 21,500.00', image: '/assets/biometrics.png' },
    { title: 'Intex 32 Channel AI NVR System', price: '₹ 45,000.00', image: '/assets/biometrics.png' },
];

const biometricsProducts = [
    { title: 'Intex Face Recognition Terminal', price: '₹ 15,000.00', image: '/assets/biometrics.png' },
    { title: 'Intex Fingerprint Access Control', price: '₹ 6,500.00', image: '/assets/biometrics.png' },
    { title: 'Intex RFID Card Reader', price: '₹ 3,500.00', image: '/assets/biometrics.png' },
    { title: 'Intex Multi-Door Controller', price: '₹ 18,000.00', image: '/assets/biometrics.png' },
];

interface ProductGridProps {
    onProductClick: () => void;
    categoryId?: string;
}

export default function ProductGrid({ onProductClick, categoryId = 'cctv' }: ProductGridProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    let products = cctvProducts;
    let title = 'Camera';
    if (categoryId === 'nvr') {
        products = nvrProducts;
        title = 'NVR & DVR Systems';
    } else if (categoryId === 'biometrics') {
        products = biometricsProducts;
        title = 'Biometric Devices';
    }

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
                                onClick={onProductClick}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
