import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, ShieldCheck, PlayCircle, Download } from 'lucide-react';

const images = [
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1549890762-0a3f8933ad76?auto=format&fit=crop&q=80&w=1200'
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="relative pt-32 lg:pt-48 pb-24 bg-white overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 translate-x-1/4 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Image Carousel */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-[2.5rem] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="w-full h-full object-cover"
                                    alt="Intex IP Bullet 5MP Pro"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-white">
                                    <span className="text-sm font-bold uppercase tracking-widest">Outdoor Series • Pro</span>
                                    <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/40 transition-colors">
                                        <PlayCircle className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase">Watch Demo</span>
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {/* Visual placeholders for arrows */}
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="absolute -bottom-6 right-8 flex space-x-3">
                            <button onClick={prevImage} className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-intex-blue hover:bg-intex-blue hover:text-white transition-all transform hover:-translate-y-1">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={nextImage} className="w-14 h-14 rounded-2xl bg-intex-blue shadow-xl flex items-center justify-center text-white hover:bg-intex-light-blue transition-all transform hover:-translate-y-1">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* 5MP PRO Badge */}
                        <motion.div
                            initial={{ rotate: -12, scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-8 -left-8 bg-intex-blue text-white w-28 h-28 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-8 border-white transform -rotate-12"
                        >
                            <span className="text-3xl font-black">5MP</span>
                            <span className="text-[10px] uppercase font-black tracking-widest">PRO UHD</span>
                        </motion.div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-3 bg-blue-50 px-4 py-1.5 rounded-full text-intex-blue mb-8 border border-blue-100">
                                <ShieldCheck className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Intelligent AI Tracking</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-intex-dark leading-[0.95] tracking-tighter mb-8">
                                Intex IP Bullet <br />
                                <span className="text-intex-blue italic">5MP Pro</span>
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-lg font-medium">
                                The ultimate in perimeter defense. Featuring 2880×1624 Ultra HD resolution, AI-powered Human & Vehicle detection, and customizable Electronic Fence alerts.
                            </p>
                        </motion.div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest ml-1">Special Launch Price</span>
                            <div className="flex items-center space-x-6">
                                <span className="text-5xl font-black text-intex-dark tracking-tighter">₹9,500.00</span>
                                <div className="flex flex-col">
                                    <span className="text-lg text-gray-400 line-through leading-none">₹12,499.00</span>
                                    <span className="text-green-600 text-sm font-black uppercase tracking-widest mt-1">Save 24%</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="relative group flex-1 bg-intex-dark text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:scale-[1.03] active:scale-95 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-intex-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <div className="relative flex items-center justify-center space-x-3">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Add to Cart</span>
                                </div>
                            </button>
                            <button className="flex-1 bg-white border-2 border-gray-200 text-intex-dark px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:border-intex-blue hover:text-intex-blue transition-all flex items-center justify-center space-x-2">
                                <Download className="w-4 h-4" />
                                <span>Brochure</span>
                            </button>
                        </div>

                        <div className="flex items-center space-x-12 pt-10 border-t border-gray-100">
                            <div className="flex flex-col">
                                <span className="text-lg font-black text-intex-dark">1 Year</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Warranty</span>
                            </div>
                            <div className="flex flex-col border-l border-gray-100 pl-12">
                                <span className="text-lg font-black text-intex-dark italic">FREE</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Installation</span>
                            </div>
                            <div className="flex flex-col border-l border-gray-100 pl-12">
                                <span className="text-lg font-black text-intex-dark">2.4GHz</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Wi-Fi / LAN</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
