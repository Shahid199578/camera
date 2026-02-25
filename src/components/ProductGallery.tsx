import { useState } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "/assets/bullet_camera.png",
    "/assets/bullet_camera.png",
    "/assets/bullet_camera.png",
    "/assets/bullet_camera.png"
];

export default function ProductGallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row-reverse gap-6">
            {/* Main Image View */}
            <div className="relative flex-1 group">
                <div className="aspect-square bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-gray-50 shadow-sm">
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src={images[activeIndex]}
                            alt={`Intex IP Bullet 5MP Pro ${activeIndex + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </AnimatePresence>
                </div>

                {/* Zoom Indicator */}
                <button className="absolute bottom-6 right-6 flex items-center space-x-2 text-gray-400 hover:text-intex-blue transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Zoom</span>
                </button>

                {/* Carousel Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-intex-blue transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
                        className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-intex-blue transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Thumbnails Column (Matching PDF/Live Site) */}
            <div className="flex md:flex-col gap-3">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-20 h-20 rounded-xl bg-white border-2 overflow-hidden transition-all p-2 flex items-center justify-center ${activeIndex === i ? 'border-red-600 ring-4 ring-red-50 shadow-xl' : 'border-gray-100 hover:border-gray-200 shadow-sm'
                            }`}
                    >
                        <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                    </button>
                ))}
            </div>
        </div>
    );
}
