import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
    onNavigate: (view: string) => void;
    currentView?: string;
}

export default function Navbar({ onNavigate, currentView = 'landing' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (view: string) => currentView === view;

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] font-sans">
            {/* Top Bar - Identity & Credibility */}
            <div className="bg-white text-gray-900 py-3 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
                    <p className="text-gray-400">India's Leading Security Brand</p>
                    <div className="flex space-x-6 text-gray-600">
                        <button onClick={() => onNavigate('help-support')} className="hover:text-red-600 transition-colors">Support</button>
                        <button onClick={() => onNavigate('help-contact')} className="hover:text-red-600 transition-colors">Contact</button>
                    </div>
                </div>
            </div>

            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-white py-6'}`}>
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div
                            onClick={() => onNavigate('landing')}
                            className="flex items-center space-x-2 cursor-pointer group"
                        >
                            <span className="text-4xl font-black text-red-600 tracking-tighter transition-transform group-hover:scale-105">INTEX</span>
                        </div>

                        {/* Desktop Navigation - Targeted Niche Focus */}
                        <div className="hidden lg:flex items-center space-x-12">
                            <button
                                onClick={() => onNavigate('category-cctv')}
                                className={`text-[13px] font-black uppercase tracking-widest transition-colors hover:text-red-700 ${isActive('category-cctv') || currentView === 'landing' ? 'text-red-600' : 'text-gray-900'}`}
                            >
                                CCTV Cameras
                            </button>

                            <button
                                onClick={() => onNavigate('category-nvr')}
                                className={`text-[13px] font-black uppercase tracking-widest transition-colors hover:text-red-700 ${isActive('category-nvr') ? 'text-red-600' : 'text-gray-900'}`}
                            >
                                NVR & DVR Systems
                            </button>

                            <button
                                onClick={() => onNavigate('category-biometrics')}
                                className={`text-[13px] font-black uppercase tracking-widest transition-colors hover:text-red-700 ${isActive('category-biometrics') ? 'text-red-600' : 'text-gray-900'}`}
                            >
                                Biometric Devices
                            </button>
                        </div>

                        {/* Search & Mobile UI */}
                        <div className="flex items-center space-x-6">
                            <div className="hidden sm:flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100 group focus-within:border-red-200 transition-colors">
                                <Search className="w-4 h-4 text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search security..."
                                    className="bg-transparent border-none outline-none text-xs font-medium text-gray-700 w-40 placeholder:text-gray-300"
                                />
                            </div>
                            <button
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-gray-900" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed inset-0 top-[120px] bg-white z-[99] transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-8 space-y-6 overflow-y-auto h-full">
                        <button
                            onClick={() => { onNavigate('category-cctv'); setIsMobileMenuOpen(false); }}
                            className={`w-full text-left py-4 text-[16px] font-black uppercase tracking-widest border-b border-gray-100 ${isActive('category-cctv') || currentView === 'landing' ? 'text-red-600' : 'text-gray-900'}`}
                        >
                            CCTV Cameras
                        </button>
                        <button
                            onClick={() => { onNavigate('category-nvr'); setIsMobileMenuOpen(false); }}
                            className={`w-full text-left py-4 text-[16px] font-black uppercase tracking-widest border-b border-gray-100 ${isActive('category-nvr') ? 'text-red-600' : 'text-gray-900'}`}
                        >
                            NVR & DVR Systems
                        </button>
                        <button
                            onClick={() => { onNavigate('category-biometrics'); setIsMobileMenuOpen(false); }}
                            className={`w-full text-left py-4 text-[16px] font-black uppercase tracking-widest border-b border-gray-100 ${isActive('category-biometrics') ? 'text-red-600' : 'text-gray-900'}`}
                        >
                            Biometric Devices
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
