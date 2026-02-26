import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

import navCategories from '../data/nav.json';

interface NavbarProps {
    onNavigate: (view: string) => void;
    currentView?: string;
}

export default function Navbar({ onNavigate, currentView = 'landing' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (view: string) => currentView === view;



    return (
        <header className="fixed top-0 left-0 right-0 z-[100] font-sans bg-white pointer-events-none">
            {/* Top Bar - Identity & Credibility */}
            <div className="bg-[#1e1e1e] text-white py-2 px-4 sm:px-6 lg:px-8 pointer-events-auto">
                <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[12px] font-medium tracking-wide">
                    <p>India's Leading Electronics Brand</p>
                    <div className="flex space-x-6">
                        <button onClick={() => onNavigate('company-about')} className="hover:text-gray-300 transition-colors">Media</button>
                        <button onClick={() => onNavigate('help-support')} className="hover:text-gray-300 transition-colors">E-Waste Management</button>
                    </div>
                </div>
            </div>

            <nav
                onMouseLeave={() => setActiveDropdown(null)}
                className={`relative transition-all duration-300 pointer-events-auto ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white border-b border-gray-100'}`}
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div
                            onClick={() => onNavigate('landing')}
                            className="flex items-center space-x-2 cursor-pointer group shrink-0 mr-8"
                        >
                            <span className="text-4xl font-black text-[#ed1c24] tracking-tighter transition-transform group-hover:scale-105">INTEX</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center h-full flex-grow">
                            <ul className="flex items-center space-x-6 xl:space-x-8 h-full">
                                {navCategories.map((category) => (
                                    <li
                                        key={category.id}
                                        className="h-full flex items-center relative"
                                        onMouseEnter={() => setActiveDropdown(category.id)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button
                                            className={`group flex items-center space-x-1.5 text-[14px] font-medium transition-colors py-6 relative
                                                ${activeDropdown === category.id || category.subcategories?.some(sub => isActive(sub.view))
                                                    ? 'text-[#ed1c24]'
                                                    : 'text-[#141414] hover:text-[#ed1c24]'}
                                            `}
                                        >
                                            <span>{category.name}</span>
                                            {category.subcategories && (
                                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === category.id ? 'rotate-180 text-[#ed1c24]' : 'text-gray-500 group-hover:text-[#ed1c24]'}`} />
                                            )}
                                        </button>

                                        {/* Dropdown specific to this category */}
                                        <div
                                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 transition-all duration-300 ease-in-out transform origin-top z-50 pointer-events-none ${activeDropdown === category.id && category.subcategories ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible h-0'}`}
                                        >
                                            <div className="bg-white px-10 py-8 shadow-2xl rounded-b-md border-t-2 border-[#ed1c24] pointer-events-auto flex gap-x-10 min-w-[max-content] justify-center">
                                                {category.subcategories?.map((sub, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => {
                                                            onNavigate(sub.view);
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="group cursor-pointer flex flex-col items-center w-[140px]"
                                                    >
                                                        {/* Label Text at Top */}
                                                        <span className="text-[14px] font-bold text-[#141414] group-hover:text-[#ed1c24] transition-colors mb-4">{sub.name}</span>

                                                        {/* Unboxed High Quality Image Below */}
                                                        <div className="w-full flex items-center justify-center">
                                                            <img src={sub.image} alt={sub.name} className="max-w-[120px] h-[80px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Search & Mobile UI */}
                        <div className="flex items-center space-x-6 shrink-0 ml-4">
                            <div className="hidden sm:flex items-center space-x-5">
                                <button className="text-[#141414] hover:text-[#ed1c24] transition-colors group">
                                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </button>
                                <button className="text-[#141414] hover:text-[#ed1c24] transition-colors group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform relative top-[1px]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </button>
                            </div>
                            <button
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#ed1c24]" /> : <Menu className="w-6 h-6 text-[#141414]" />}
                            </button>
                        </div>
                    </div>
                </div>



                {/* Mobile Menu */}
                <div className={`lg:hidden fixed inset-0 top-[104px] bg-white z-[99] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 space-y-4 overflow-y-auto h-full pb-32">
                        {navCategories.map((category) => (
                            <div key={category.id} className="border-b border-gray-100">
                                <div className="w-full text-left py-4 text-[15px] font-medium text-gray-900 flex justify-between items-center group">
                                    <span>{category.name}</span>
                                    {category.subcategories && <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </div>
                                {category.subcategories && (
                                    <div className="pl-4 pb-4 space-y-4">
                                        {category.subcategories.map((sub, index) => (
                                            <button
                                                key={index}
                                                onClick={() => { onNavigate(sub.view); setIsMobileMenuOpen(false); }}
                                                className={`block w-full text-left text-[14px] font-semibold transition-colors ${isActive(sub.view) ? 'text-[#ed1c24]' : 'text-gray-600 hover:text-[#ed1c24]'}`}
                                            >
                                                {sub.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
