import { Link } from 'lucide-react';

interface ProductCardProps {
    title: string;
    price: string;
    image: string;
    badge?: string;
    onClick?: () => void;
}

export default function ProductCard({ title, price, image, badge, onClick }: ProductCardProps) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col group bg-white p-[15px_5px_15px] rounded-[10px] shadow-[0_2px_5px_0_#ccc] min-h-[380px] transition-all duration-300 hover:shadow-[0_8px_20px_0_#ddd] ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
        >
            {/* Image Container - Using Official Absolute Positioning Pattern */}
            <div className="relative aspect-square overflow-hidden mb-6 rounded-lg bg-transparent">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {badge}
                    </div>
                )}

                {/* Link Icon - Top Right (as seen in screenshot) */}
                <div className="absolute top-2 right-2 text-gray-400 group-hover:text-gray-900 transition-colors">
                    <Link className="w-5 h-5 rotate-45" />
                </div>
            </div>

            {/* Content - Precision Typography & Spacing */}
            <div className="flex flex-col flex-1 text-center font-sans">
                <h3 className="text-[13px] font-bold text-[#333] line-clamp-2 px-4 leading-[1.4] mb-4">
                    {title}
                </h3>
                <div className="mt-auto pb-4">
                    <span className="text-[16px] font-black text-red-600 tracking-tight">
                        {price}
                    </span>
                </div>
            </div>
        </div>
    );
}
